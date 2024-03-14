import React from 'react';
import skills from '../../../assets/Skills.png';
import datastructures from '../../../assets/datastructures.png';
import LSH from '../../../assets/LSH.png';
import food_wastage from '../../../assets/food_wastage.png';
import webrtc from '../../../assets/webrtc.jpg';
import cardio_ML from '../../../assets/cardiomyopathy_ML.jpg';
import './data.css';

const CustomImage = ({ src, alt, style }) => (
  <img
    src={src}
    alt={alt}
    style={style}
  />
);

const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white">
        <p>
          As an Developer, I've worked at various companies where i learnt & crafted software that's not just stashed away.

        </p>
        <p>
          * Hire me! (why?)*
        </p>
        <p>
          *I'm not just fluent in coding , but also in the art of turning coffee into code *
        </p>
        <p>
          *Never shows up empty handed, if I don't know something, I will learn and either comeup with a solution or a quickfix*
        </p>
        <p>
          Open Source? I'm building one Right Now!!!
        </p>

      </div>
    ),
  },
  {
    id: 6,
    title: "Education",
    content: (
      <div className="experience gap-3 d-flex row">
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="www.rice.edu" title="Rice University" style={{ color: '#eecda3' }}>
              Rice University
            </a> - Masters Computer Science
          </h3>
          <span className="small text-white">January 23 =&gt; April 24 (Texas, USA)</span>
        </div>
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="gitam.edu" title="GITAM University" style={{ color: '#eecda3' }}>
              GITAM University
            </a> - BTech Computer Science
          </h3>
          <span className="small text-white">June 17 =&gt; May 21 (Hyderabad, India)"</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Skills",
    content: (
      <div className="d-flex justify-content-center">
        <CustomImage
          src={skills}
          alt="Skills"
          style={{ width: '105%', height: 'auto' }}
        />
      </div>
    )
  },
  {
    id: 3,
    title: "Experience",
    content: (

      <div className="experience gap-3 d-flex row">
        <div className="d-flex row gap-2">
          <h5 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="rice.edu" title="Rice University" style={{ color: '#3bc0a5' }}>
              Rice University
            </a> - Teaching Assistant (Machine Learning & Deep Learning)
          </h5>
          <span class="small text-white"> May-23 =&gt; Present, Texas</span>
        </div>

        <div className="d-flex row gap-2">
          <h5 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="https://www.finarbconsulting.com" title="Finarb " style={{ color: '#3bc0a5' }}>
              Finarb
            </a> - Software Engineer - Artificial Intelligence
          </h5>
          <span className="small text-white">Junuary-22 =&gt; December-22, California</span>
        </div>


        <div className="d-flex row gap-2">
          <h5 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="https://www.wiley.com/edge/" title="Wiley Edge" style={{ color: '#3bc0a5' }}>
              JP Morgan Chase
            </a> - Full Stack Intern & Consultant (Wiley Edge)
          </h5>
          <span className="small text-white">June-21 =&gt; December-21, Texas</span>
        </div>

        <div className="d-flex row gap-2">
          <h5 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="#" title="FreeLancing" style={{ color: '#3bc0a5' }}>
              Freelancer
            </a> - Mobile App and Web Developer
          </h5>
          <span className="small text-white">Jan-22 =&gt; Apr-22, Texas</span>
        </div>

        <div className="d-flex row gap-2">
          <h5 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="#" title="FreeLancing" style={{ color: '#3bc0a5' }}>
              Swecha
            </a> - Data Science Intern
          </h5>
          <span className="small text-white">Jan-22 =&gt; Apr-22, Texas</span>
        </div>


      </div>

    ),
  },
  // Your JSX code
  {
    id: 4,
    title: "Works",
    content: (
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-6 mb-3" style={{ marginTop: '20px' }}>
          <a href="https://github.com/aniteshreddy/dataStructuresAlgorithmsJava" className="image-link">

            <CustomImage
              src={datastructures}
              alt="Projects"
              style={{ width: '80%', height: '70%', padding: '0 2px' }}
            />
          </a>
          <span className="small text-white">Data Structures & Algorithms</span>
        </div>
        <div className="col-md-6 mb-3" style={{ marginTop: '20px' }}>
          <a href="https://github.com/sharathgiri87/Marketplace-Price-Prediction-using-NLP-and-LSH" className="image-link">
            <CustomImage
              src={LSH}
              alt="Projects"
              style={{ width: '80%', height: '70%', padding: '0 2px' }}
            />
          </a>
          <span className="small text-white">Price Prediction using NLP and LSH</span>

        </div>
        <div className="col-md-6 mb-3" style={{ marginTop: '20px' }}>
          <a href="https://github.com/sharathgiri87/Computer-vision-to-reduce-food-wastage" className="image-link">
            <CustomImage
              src={food_wastage}
              alt="Projects"
              style={{ width: '80%', height: '70%', padding: ' 2px' }}
            />
          </a>
          <span className="small text-white" >Computer Vision to Reduce Food Wastage</span>

        </div>
        <div className="col-md-6 mb-3" style={{ marginTop: '20px' }}>
          <a href="https://github.com/aniteshreddy/webrtc_rails" className="image-link">
            <CustomImage
              src={webrtc}
              alt="Projects"
              style={{ width: '80%', height: '70%', padding: '0 2px' }}
            />
          </a>
          <span className="small text-white">Webrtc using Rails</span>

        </div>
        <div className="col-md-6 mb-3" style={{ marginTop: '20px' }}>
          <a href="https://github.com/aniteshreddy/webrtc_rails" className="image-link">
            <CustomImage
              src={cardio_ML}
              alt="Projects"
              style={{ width: '80%', height: '70%', padding: '0 2px' }}
            />
          </a>
          <span className="small text-white">Cardiomyopathy Diagnosis using ML</span>

        </div>
      </div>




    )
  },
  {
    id: 5,
    title: "Certifications",
    content: (
      <div className="experience gap-3 d-flex row">
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="www.rice.edu" title="Rice University" style={{ color: '#eecda3' }}>
              Wiley - Software Developer
            </a> - Wiley Edge
          </h3>
          <span className="small text-white">November 2021</span>
        </div>
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="gitam.edu" title="GITAM University" style={{ color: '#eecda3' }}>
              Cloud Computing Basics
            </a> - LearnQuest

          </h3>
          <span className="small text-white">December 2020  =&gt; Credential ID QQCWKAGNCUT9</span>
        </div>
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="gitam.edu" title="GITAM University" style={{ color: '#eecda3' }}>
              Machine Learning Algorithms: Supervised Learning Tip to Tail

            </a> - Alberta Machine Intelligence Institute

          </h3>
          <span className="small text-white">December 2020 =&gt; Credential ID 8XFDXQ5SMYA6</span>
        </div>
        <div className="d-flex row gap-2">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            <a href="gitam.edu" title="GITAM University" style={{ color: '#eecda3' }}>

              Python Data Structures

            </a> - University of Michigan

          </h3>
          <span className="small text-white">Dec 2020 =&gt; Credential ID V3F6W5K5MN3L</span>
        </div>
      </div>
    )
  },

  {
    id: 7,
    title: "Cocurriculars",
    content: (
      <div className="experience gap-3 d-flex row">
        <div className="d-flex row gap-0">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            EWB - Engineers Without Borders
          </h3>
          <span className="small text-white">Student Co-ordinator</span>
          <span className="small text-white">I have been an integral part of various events like Flood relief camps, Technical seminars and arranging digital classes 
          to the governments schools by getting funds from the donors.</span>

        </div>
        <div className="d-flex row gap-0">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            GLUG (GNU Linux Users Group)
          </h3>
          <span className="small text-white">President</span>
          <span className="small text-white">I have co-founded a club in association FSMI(Free Software Movement of India)</span>
          <span className="small text-white">Through this student body, I have arranged multiple seminars and used teach Mobile App and Web Development</span>

        </div>
        <div className="d-flex row gap-0">
          <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
            Inter school Badminton Champion
          </h3>
          <span className="small text-white">Runner up</span>
        </div>
        
      </div>
    )
  },



];

export default data;
