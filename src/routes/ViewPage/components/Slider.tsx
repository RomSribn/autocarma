import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { sliderDirectionCheck, sliderDirectionReverse, sliderDirectionNormal } from 'variables';
import './Slider.scss';

import { ISliderProps } from '../interface';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider({ images }: ISliderProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className="slider">
      <AutoPlaySwipeableViews
        axis={
          theme.direction === sliderDirectionCheck ? sliderDirectionReverse : sliderDirectionNormal
        }
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className="img" src={step} alt="current images" />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Slider;
