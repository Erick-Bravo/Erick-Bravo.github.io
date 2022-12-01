import styled from '@emotion/styled';
import { Box } from '@mui/material';

const WeatherAPIContainer = styled(Box)({
     marginBottom: '40px'
})

const WeatherAPI = () => {
    return (
        <WeatherAPIContainer>
             This is the WeatherAPI Component 
        </WeatherAPIContainer>
    );
};

export default WeatherAPI;