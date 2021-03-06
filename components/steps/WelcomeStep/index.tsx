import styles from './WelcomeStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { MainContext } from '../../../pages';
import React from 'react';
export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img
          className={styles.handWaveImg}
          src="/static/hand-wave.png"
          alt="Celebration"
        />
        Welcome to Clubhouse
      </h3>
      <p>
        We're working hard to get Clubhouse ready for everyone! While we wrap up
        the finishing youches, we're adding people gradually to make sure
        nothing breaks:
      </p>
      <div>
        <Button className={styles.btn} onClick={onNextStep}>
          Get your username{' '}
          <img className={styles['btn-img']} src="/static/arrow-left.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib ">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
