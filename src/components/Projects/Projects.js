import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rentatron from "../../Assets/Projects/rentatron.png";
import smartcalling from "../../Assets/Projects/callingai.png";
import trucker from "../../Assets/Projects/trucker1.png";
import trucker2 from "../../Assets/Projects/trucker2.png";
import Scopium from "../../Assets/Projects/scopium.png";
import Anime from "../../Assets/Projects/anime.png";
import dentalflow from "../../Assets/Projects/dentalflow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rentatron}
              isBlog={false}
              title="Rentatron – Rental Marketplace"
              description="Rentatron is a full-stack rental marketplace platform built with Next.js frontend and Django backend. On the user side, individuals can signup/login, create their own listings for products, vehicles, or services,
 browse and interact with other users’ listings, manage bookings, and track transactions. All user actions and listings are verified and approved through the admin panel. On the admin side, the platform provides
 comprehensive controls for managing listings, verifying documents, approving user activities, monitoring transactions, and overseeing overall platform operations to ensure secure and smooth marketplace functionality."
              // ghLink="https://github.com/safdaralikhan/rentatron-user"
              demoLink="https://rentatron.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartcalling}
              isBlog={false}
              title="Smart Calling Agent"
              description="Smart Calling Agent is an AI-powered platform built with Vite.js frontend and FastAPI backend that automates inbound and outbound calling campaigns. Users can create agents and assign them to campaigns with specific numbers, voice preferences, and languages. Calls are recorded, and detailed analytics are provided for performance tracking. The platform leverages Retail AI and other 3rd-party APIs for AI-driven automation, making call management efficient and streamlined."
              // ghLink="https://github.com/safdaralikhan/smart-calling-ai"
            demoLink="https://callmindai-admin.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trucker}
              isBlog={false}
              title="Trucker AI"
              description="TruckerAI is an intelligent admin dashboard built with Django backend and Next.js frontend. The system is
 designed to automate trucking company operations by processing invoices and service documents. Users can
 upload any PDF or invoice, and an integrated OpenAI model analyzes the document to extract key details such as vendor information,
 services provided, truck details, quantities, pricing, and totals."
              // ghLink="https://github.com/safdaralikhan/trucker-admin"
            demoLink="https://truckeradmin.netlify.app/ "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scopium}
              isBlog={false}
              title="Scopium AI"
              description="Scopium AI is a React-based frontend platform with an AI-powered backend that uses machine learning algorithms to analyze user-provided health data and symptoms. The system collects input from the frontend, processes it with advanced AI models, and generates predictions for potential health risks, primarily focusing on cardiovascular conditions. Results are presented visually in graphs and detailed document formats, providing actionable insights for clinics, healthcare professionals, and patients. The platform demonstrates the integration of real-time data collection, AI-driven analysis, and interactive result visualization."
              // ghLink="https://github.com/safdaralikhan/scopium-dashboard"

            demoLink="https://scopium.ai/"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dentalflow}
              isBlog={false}
              title="DentalFlow "
              description="DentalFlow is a modern dental services platform built with Vite.js and TailwindCSS on the frontend, 
with a Django backend. The platform allows clients to purchase service packages including website SEO, 
AI-powered content generation, and social media updates. Whether it’s a client’s existing website or specific dental services,
 the system generates SEO-optimized content to improve search rankings and maintain an active online presence, making digital marketing
 for dental businesses automated and efficient."
              ghLink="https://github.com/safdaralikhan/rentalflow"
            demoLink="https://dental-flow.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Anime}
              isBlog={false}
              title="MyAnimeWatch"
              description="MyAnimeWatch is a modern anime streaming and information platform built with Next.js and TailwindCSS on the frontend, with a Django backend. The backend integrates multiple 3rd-party APIs to fetch comprehensive anime details including episodes, descriptions, ratings, genres, and release information. Users can browse, search, and filter anime titles, view detailed information for each anime, and keep track of their favorite series.
 The platform ensures a seamless user experience with fast loading, responsive design, and real-time data fetched from the integrated APIs.
"
              ghLink="https://github.com/muhammadasad149/emotions_dectections.git"
            demoLink="https://myanimewatch.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
