import React from "react";
import {
    ProjectSection,
    Project,
    IMG,
    P,
    P2,
    A,
    Overlay,
    OverlayH2,
    OverlayP,
    OverlayFooterP,
} from "./styles";
import { PROJECTS } from "./data";

const Projects = () => {
    return (
        <ProjectSection>
            {PROJECTS.map((project) => (
                <Project key={project.id}>
                    <Overlay>
                        <OverlayH2>{project.title}</OverlayH2>
                        <OverlayP>{project.description}</OverlayP>
                        <OverlayP>
                            Visit the online project{" "}
                            <A href={project.link} target="blank">
                                here
                            </A>
                        </OverlayP>
                        <OverlayFooterP>{project.stack}</OverlayFooterP>
                    </Overlay>
                    <P>{project.count}</P>
                    <IMG src={project.imageSource} alt="" />
                    <P>{project.title}</P>
                </Project>
            ))}
            <P2>More projects coming soon...</P2>
        </ProjectSection>
    );
};

export default Projects;
