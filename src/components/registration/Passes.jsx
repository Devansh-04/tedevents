import styles from "./Passes.module.css";
import React, {useState, useTransition } from 'react';
import { useInView } from "react-intersection-observer";
import useAOS from "../../utilities/Hooks/useAOS";
import Modal from "../verficationModal/VerficationModal"

const Passes = () => {
  const [selectedPass, setselectedPass] = useState(null)
  const [isPending, startTransition] = useTransition();

  const openModal = (userType)=>{
    startTransition(() => {
      setselectedPass(userType);
    });
  };
  const closeModal = ()=>{
    startTransition(() => {
      setselectedPass(null);
    });
  };

  const aos = useAOS();
  const { ref: upperRef, inView: upperVisibility } = useInView();
  const { ref: ticket1Ref, inView: ticket1Visibility } = useInView();
  const { ref: ticket2Ref, inView: ticket2Visibility } = useInView();

  return (
    <div className={styles.contentContainer}>
      <div>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Thank you</h1> 
        </div>
        <p className={styles.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit quibusdam, obcaecati culpa sequi inventore iure eaque, maiores quo sit pariatur quam excepturi. Odit enim tenetur saepe maxime magni ab.
        </p>
      </div>
      <div></div>
        
      <div className={styles.termsCondButton}>
        <span className={styles.linkSpan}>
          <a
            href="/Terms"
            className={styles.link}
          >
            TERMS & CONDITIONS<p className={styles.arrow}> &#8594; </p>
          </a>
        </span>
      </div>
      {selectedPass && <Modal userType = {selectedPass} func = {closeModal} isPending={isPending} />}
      {selectedPass && <div id={styles.overlay}></div>}
    </div>
  );
};

export default Passes;
