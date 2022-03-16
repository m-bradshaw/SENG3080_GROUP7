/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import styles from '../css/Loginscreen.module.scss';

export default function Loginscreen(props) {
  return (
    <div className={`loginscreen ${cn(styles.block, styles.block_layout)}`}>
      <div className={cn(styles.flex, styles.flex_layout)}>
        <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>
          {'{Application Name}'}
        </h1>
        <h4 className={cn(styles.highlights, styles.highlights_layout)}>
          {'Username'}
        </h4>
        <div className={cn(styles.box, styles.box_layout)} />
        <h4 className={cn(styles.highlights, styles.highlights_layout1)}>
          {'Password'}
        </h4>
        <div className={cn(styles.box, styles.box_layout1)} />

        <div className={cn(styles.flex1, styles.flex1_layout)}>
          <div className={cn(styles.text_body, styles.text_body_layout)}>
            {'Create Account'}
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.text_body, styles.text_body_layout)}>
            {'Forgot Password'}
          </div>
        </div>

        <div
          style={{
            '--src': `url(${
              require('assets/ec2bd83faa9edf6cc57f51541e39300d.png').default
            })`
          }}
          className={cn(styles.image, styles.image_layout)}
        />
      </div>
    </div>
  );
}

Loginscreen.inStorybook = true;
