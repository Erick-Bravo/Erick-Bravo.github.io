import styled from '@emotion/styled';
import { Box } from '@mui/material';
import LabTabs from '../../Tabs/Tabs';
import Header from '../Header/Header';

const ProjectsContainer = styled(Box)({
     marginBottom: '40px'
})

const Projects = () => {
    return (
        <ProjectsContainer>
            <Header text="Projects" />
             <LabTabs />
        </ProjectsContainer>
    );
};

export default Projects;
