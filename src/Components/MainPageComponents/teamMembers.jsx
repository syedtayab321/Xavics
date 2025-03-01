import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/team.css";

const teamMembers = [
  {
    name: "Shayan Ahmed Khan",
    role: "Project Manager",
    image: require('./../../assets/teamImages/shayan.png'),
    description: "Efficiently manages teams and ensures that deliverables are delevired on time.",
  },
  {
    name: "Ahsan Habib",
    role: "Full Stack Web Developer",
    image: require('./../../assets/teamImages/ahsan.png'),
    description: "Expert in developing high-performance websites and web apps",
  },
  {
    name: "Syed Tayyab",
    role: "Full Stack Developer",
    image: require('./../../assets/teamImages/tayyab.png'),
    description: "Passionate about designing and developing web and mobile applications",
  },
  {
    name: "Abdul Sami",
    role: "Backend Developer",
    image: require('./../../assets/teamImages/sami.png'),
    description: "Efficiently manages backend Tasks and Solve Backend queries",
  },
  {
    name: "Nayyer Farooq",
    role: "Mobile App Developer",
    image: require('./../../assets/teamImages/nayyer.png'),
    description: "Creates engaging content for Mobile Applications",
  },
  {
    name: "Muhammad Rizwan",
    role: "UI/UX Designer",
    image: require('./../../assets/teamImages/rizwan.png'),
    description: "Skilled in optimizing e-commerce platforms for better sales.",
  },
  {
    name: "Rehan Khan",
    role: "Full Stack Web Developer",
    image: require('./../../assets/teamImages/rehan.png'),
    description: "Ensures top-notch quality by creating dynamic applications",
  },
];

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="team-page"
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="team-title"
            >
              Meet Our Team
            </motion.h2>
            <p className="team-description">
              Get to know the professionals behind our success.
            </p>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
                  <Image
                    src={member.image}
                    alt={member.name}
                    roundedCircle
                    width={250}
                    height={250}
                    className="team-image mx-auto mt-3"
                    loading="lazy"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="team-name">{member.name}</Card.Title>
                    <Card.Subtitle className="team-role">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text className="team-description">
                      {member.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Team;
