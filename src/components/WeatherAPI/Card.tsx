import styled from '@emotion/styled';
import { Box } from '@mui/material';

const CardContainer = styled(Box)({
     marginBottom: '40px'
})

const Card = () => {
    return (
        <CardContainer>
             This is the Card Component 
        </CardContainer>
    );
};

export default Card;