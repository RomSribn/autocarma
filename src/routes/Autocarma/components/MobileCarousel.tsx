import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ReactSwipeableViews from 'react-swipeable-views';
import { sliderDirectionCheck, sliderDirectionReverse, sliderDirectionNormal } from 'variables';
import { IMobileCarouselProps } from '../interface';
import CarouselItem from './CarouselItem';

const MobileCarousel = ({ markers }: IMobileCarouselProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps: number = markers.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    console.log(theme);
    debugger;
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className="mobile-carousel">
      <ReactSwipeableViews
        axis={
          theme.direction === sliderDirectionCheck ? sliderDirectionReverse : sliderDirectionNormal
        }
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {markers
          ? markers.map(marker => (
            <Paper square elevation={0} className="mobile-carousel-item">
              <CarouselItem key={marker[0]} {...marker[1]} />
            </Paper>
          ))
          : null}
      </ReactSwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={(
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === sliderDirectionCheck ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
)}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === sliderDirectionCheck ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
)}
      />
    </div>
  );
};

export default MobileCarousel;
