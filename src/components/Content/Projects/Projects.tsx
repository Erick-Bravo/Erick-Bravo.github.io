import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Header from '../Header/Header';

const ProjectsContainer = styled(Box)({
     marginBottom: '40px'
})

const Projects = () => {
    return (
        <ProjectsContainer>
            <Header text="Projects" />
             This is the Projects Component 
        </ProjectsContainer>
    );
};

export default Projects;
