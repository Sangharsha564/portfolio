import React from 'react'
import { styled } from 'styled-components'
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


const ContainerFluid=styled(Container)`
        background-color: #015761;
    `;
    const ContainerItem=styled(Container)`
        background-color: #015761;
        padding: 30px;
    `;
    const HTwoItem=styled.span`
        padding: 3px;
        border: 2px solid #F7DC4F;
        background-color: #015761 ;
        color: #F7DC4F;
        font-size: 30px;
        
    `;
    const Heading=styled.div`
        margin-bottom: 20px;
    `;
    const SubHeading=styled.h5`
        color: #F7DC4F;
    `;
    const InfoItem=styled.div`
        margin-bottom: 20px;
    `;

    const HSix=styled.h6`
        /* color: #F7DC4F; */
        color: white;
    `;
    const LiItem=styled.li`
        color: white;
       
    `;
    const ImageDiv=styled.div`
        margin-bottom:20px;
        
    `;

    const Pdfitem=styled.div`
        padding: 10px;
        text-align: center;
    `;

    const PdfFile=styled.div`
       
        margin-top: 20px;
    `;

    const PdfLink=styled.a`
        color: white;
        text-decoration: none;
    `;


const Resume = () => {
    

  return (
    <>
    <ContainerFluid fluid>
        <Pdfitem>
        <HTwoItem>
            IMDB
        </HTwoItem>
        <PdfFile>

        <PdfLink
        href="/SangharshaCV.pdf" 
        download="SangharshaCV.pdf" 
      >
        Download PDF
      </PdfLink>
        </PdfFile>

        </Pdfitem>
        <ContainerItem>
            <Row>
                <Col md={6} sm={12}>
                <ImageDiv>

                <Image src="./Photos/me.jpg" roundedCircle style={{width:'30%'}} />
                </ImageDiv>

                <Heading>

                    <HTwoItem>MERN STACK DEVELOPER
                    </HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                    Sangharsha Thapa
                    </SubHeading>
                    <HSix>motivated web developer with MERN stack expertise. Passionate about userfriendly interfaces and scalable applications. Active open-source contributor
                    with strong problem-solving skills. Committed to continuous learning for
                    innovative solutions</HSix>
                </InfoItem>

                <Heading>

                    <HTwoItem>Contact</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                        Phone NO:
                    </SubHeading>
                    <HSix>9861526363</HSix>
                    <SubHeading>
                        Email:
                    </SubHeading>
                    <HSix>sobitmagar76@gmail.com</HSix>
                    <SubHeading>
                        Location:
                    </SubHeading>
                    <HSix>Thankot, Kathmandu, Nepal</HSix>
                </InfoItem>
                

                <Heading>

                    <HTwoItem>Education</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                        SLC
                    </SubHeading>
                    <HSix>Bright Angels School / kathmandu</HSix>
                    <SubHeading>
                        NEB
                    </SubHeading>
                    <HSix>Bernhardt College / kathmandu</HSix>
                    <SubHeading>
                    Bachelors of Science in Computer Science and Information Technology
                    </SubHeading>
                    <HSix>Nepalaya College / kathmandu / November, 2018 - Present</HSix>
                </InfoItem>


                

                
                </Col>


                <Col md={6} sm={12}>
                <Heading>

<HTwoItem>Tranning / Certification</HTwoItem>
</Heading>
<InfoItem>
<SubHeading>
Web Design
</SubHeading>
<HSix>Broadways Infosys / 2018</HSix>
</InfoItem>
                <Heading>

                        <HTwoItem>Project</HTwoItem>
                        </Heading>
                        <InfoItem>
                        <SubHeading>
                        BikePartsNepal
                        </SubHeading>
                        <HSix>E-commerce website developed using MERN Stack for my 7th Semester
                            Project</HSix>
                        <SubHeading>
                        Restaurant
                        </SubHeading>
                        <HSix>Frontend project developed during web design Training</HSix>
                        </InfoItem>
                        <Heading>

                    <HTwoItem>Skills</HTwoItem>
                </Heading>
                <InfoItem>
                    <ul>
                        <LiItem><HSix>Front End Web Development(HTML5, CSS JS REACT ) -Skillful</HSix>
                        </LiItem>
                        <LiItem><HSix>Backend development on
                        Express and Node js - Skillful</HSix> </LiItem>
                        <LiItem><HSix>GIT / Version Control - Skillfu</HSix> </LiItem>
                        <LiItem><HSix>Database and API Interaction -
                        Skillful</HSix> </LiItem>
                        <LiItem><HSix>Javascript Programming
                        language - Skillful</HSix> 
                        </LiItem>
                        <LiItem><HSix>programming language
                        (python,java,c+) - Beginner</HSix> 
                        </LiItem>
                    </ul>
                </InfoItem>

                <Heading>

                    <HTwoItem>Experience</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                    Fresher
                    </SubHeading>
                </InfoItem>

                <Heading>

                    <HTwoItem>Language</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                        Nepali
                    </SubHeading>
                    <ProgressBar variant="info" now={95} />
                    <SubHeading>
                        English
                    </SubHeading>
                    <ProgressBar variant="info" now={85} />
                    <SubHeading>
                        Hindi
                    </SubHeading>
                    <ProgressBar variant="info" now={95} />
                </InfoItem>

                
                </Col>
            </Row>
        </ContainerItem>
    </ContainerFluid>
    
    
    </>
  )
}

export default Resume
