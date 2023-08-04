import React from "react";
import styled  from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Bootstrap", level: 90 },
  { name: "JavaScript", level: 80 },
];
const OtherskillsData = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 85 },
  ];
 
  const FirstContainer=styled(Container)`
        background-color: #F1F0F0;
        padding-bottom: 60px;
  `;
  const Colcointainer=styled(Col)`
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        padding-top: 20px;
  `;
  const Textbar=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;
  const FullBar=styled.div`
    width: 60%;
    height: 40px;
    background-color: #F7DC4F;
    
    margin-bottom: 20px; 
    position: relative;
  `;
  const Levelbar=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.$level}%;
    color:#F7DC4F ;
    font-size: large;
    font-weight: bold;
    background-color: #015761;
   
  `;
const Skills = () => {
  return (
    <>
    <FirstContainer id="skills" fluid>
        <h1 style={{textAlign:'center', color:'#015761', paddingTop:'60px',paddingBottom:'40px'}}>Skills</h1>
        <Row>
            <Colcointainer sm={12} md={6}>

                {
                    skillsData.map((skills,index)=>(
                        <Textbar key={index}>
                        <FullBar>
                            <Levelbar $level={skills.level}>{skills.name}</Levelbar>
                        </FullBar>
                        </Textbar>
                    ))
                }
          
            </Colcointainer>
            <Colcointainer>
            {
                    OtherskillsData.map((skills,index)=>(
                        <Textbar key={index}>
                        <FullBar>
                            <Levelbar $level={skills.level}>{skills.name}</Levelbar>
                        </FullBar>
                        </Textbar>
                    ))
                }
            </Colcointainer>
        </Row>
    </FirstContainer>
    
    </>
  )
}

export default Skills
