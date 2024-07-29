import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from "../assets/img/sample.webp";
import projImg2 from "../assets/img/sample.webp";
import projImg3 from "../assets/img/sample.webp";

import nineteeneightyfour from "../assets/img/books/nineteeneightyfour.jpg";
import therichestmaninbabylon from "../assets/img/books/therichestmaninbabylon.jpg";
import flowersforalgernon from "../assets/img/books/flowersforalgernon.jpg";
import howtowinfriendsandinfluencepeople from "../assets/img/books/howtowinfriendsandinfluencepeople.jpg";
import thesightofyou from "../assets/img/books/thesightofyou.jpg";
import theartofpublicspeaking from "../assets/img/books/theartofpublicspeaking.jpg";
import ontask from "../assets/img/books/ontask.jpg";
import tokillamockingbird from "../assets/img/books/tokillamockingbird.jpg";
import quantummarketing from "../assets/img/books/quantummarketing.jpg";
import thecommonpathtouncommonsuccess from "../assets/img/books/thecommonpathtouncommonsuccess.jpg";
import whyzebrasdontgetulcers from "../assets/img/books/whyzebrasdontgetulcers.jpg";
import theriseofsuperman from "../assets/img/books/theriseofsuperman.jpg";
import stealingfire from "../assets/img/books/stealingfire.jpg";
import themazerunner from "../assets/img/books/themazerunner.jpg";
import meditations from "../assets/img/books/meditations.jpg";
import itendswithus from "../assets/img/books/itendswithus.jpg";
import thelittleprince from "../assets/img/books/thelittleprince.jpg";
import atomichabits from "../assets/img/books/atomichabits.jpg";
import thecommunistmanifesto from "../assets/img/books/thecommunistmanifesto.jpg";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import BookCard from './BookCard'; // Import the simplified BookCard component


export const Books = () => {
    const books = [
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            imgUrl: thelittleprince
        },
        {
            title: "Flowers for Algernon",
            author: "Daniel Keyes",
            imgUrl: flowersforalgernon
        },
        {
          title: "The Communist Manifesto",
          author: "Karl Marx and Friedrich Engels",
          imgUrl: thecommunistmanifesto
        },
        {
          title: "1984",
          author: "George Orwell",
          imgUrl: nineteeneightyfour
        },
        {
          title: "Meditations",
          author: "Marcus Aurelius",
          imgUrl: meditations
        },
        {
          title: "The Richest Man in Babylon",
          author: "George S. Clason",
          imgUrl: therichestmaninbabylon
        },
        {
          title: "How to Win Friends and Influence People",
          author: "Dale Carnegie",
          imgUrl: howtowinfriendsandinfluencepeople
        },
        {
          title: "The Sight of You",
          author: "Holly Miller",
          imgUrl: thesightofyou
        },
        {
          title: "The Art of Public Speaking",
          author: "Dale Carnegie",
          imgUrl: theartofpublicspeaking
        },
        {
          title: "On Task",
          author: "Padre",
          imgUrl: ontask
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          imgUrl: tokillamockingbird
        },
        {
          title: "Quantum Marketing",
          author: "Raja Rajamannar",
          imgUrl: quantummarketing
        },
        {
          title: "The Common Path to Uncommon Success",
          author: "John Lee Dumas",
          imgUrl: thecommonpathtouncommonsuccess
        },
        {
          title: "Why Zebras Don't Get Ulcers",
          author: "Robert M. Sapolsky",
          imgUrl: whyzebrasdontgetulcers
        },
        {
            title: "It Ends With Us",
            author: "Colleen Hoover",
            imgUrl: itendswithus
          },
        {
          title: "The Rise of Superman",
          author: "Steven Kotler",
          imgUrl: theriseofsuperman
        },
        {
          title: "Stealing Fire",
          author: "Steven Kotler and Jamie Wheal",
          imgUrl: stealingfire
        },
        {
          title: "The Maze Runner",
          author: "James Dashner",
          imgUrl: themazerunner
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          imgUrl: atomichabits
        }
      ];
      
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="books" id="books">
        <Container>
          <Row>
            <Col size={12}>
              <div className="books-bx">
                <h2>Books</h2>
                <p>Discover a curated selection of books from my personal library. These titles represent some of my favorite reads and essential references that have enriched my understanding and inspired my journey.</p>
                <Carousel 
                  responsive={responsive} 
                  infinite={true} 
                  className="books-carousel" 
                  swipeable={true} 
                  draggable={true}
                  showDots={false}
                >
                  {books.map((book, index) => (
                    <span className="item" key={index}>
                      <BookCard imageSrc={book.imgUrl} title={book.title} author={book.author} />
                    </span>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background" />
      </section>
    );
  }