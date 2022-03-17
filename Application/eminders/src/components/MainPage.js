/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';
import Button from 'react-bootstrap/Button';

import styles from '../css/MainPage.module.scss';

export default function MainPage(props) {
  return (
    <div className={`main-page ${cn(styles.block, styles.block_layout)}`}>
      <px-posize
        track-style='{"flexGrow":1}'
        x="26fr 1388fr 26fr"
        y="21fr minmax(982px,982fr) 21fr"
        lg-x="23fr 1388fr 23fr"
        lg-y="18fr minmax(982px,982fr) 18fr"
        md-x="19fr 1388fr 19fr"
        md-y="16fr minmax(982px,982fr) 16fr"
        sm-x="16fr 1388fr 16fr"
        sm-y="13fr minmax(982px,982fr) 13fr"
        xs-x="15fr 1388fr 15fr"
        xs-y="12fr minmax(982px,982fr) 12fr"
        xxs-x="13fr 1388fr 13fr"
        xxs-y="11fr minmax(982px,982fr) 11fr"
        tn-x="12fr 1388fr 12fr"
        tn-y="10fr minmax(982px,982fr) 10fr">
        <div className={cn(styles.flex)}>
          <div className={cn(styles.flex1, styles.flex1_layout)}>
            <div className={cn(styles.flex1_item)}>
              <div
                className={cn(styles.cover_block, styles.cover_block_layout)}>
                <div className={cn(styles.text_body, styles.text_body_layout)}>
                  {'Log Out'}
                </div>
              </div>
            </div>
            <div className={cn(styles.flex1_spacer)} />
            <h1 className={cn(styles.hero_title, styles.hero_title_layout)}>
              {'Welcome {User}!'}
            </h1>
          </div>

          <h4 className={cn(styles.highlights, styles.highlights_layout)}>
            {'Create/Edit Reminder:'}
          </h4>
          <div
            className={cn(
              styles.small_text_body,
              styles.small_text_body_layout
            )}>
            {'Message:'}
          </div>

          <div
            className={cn(styles.cover_block6, styles.cover_block6_layout)}>
            <div
              className={cn(
                styles.small_text_body,
                styles.small_text_body_layout1
              )}>
              {'This is a new reminder to do a thing....'}
            </div>
          </div>

          <div
            className={cn(
              styles.small_text_body,
              styles.small_text_body_layout2
            )}>
            {'Date:'}
          </div>

          <div className={cn(styles.flex2, styles.flex2_layout)}>
            <div className={cn(styles.flex2_item)}>
              <div
                className={cn(styles.cover_block2, styles.cover_block2_layout)}>
                <div
                  className={cn(
                    styles.small_text_body,
                    styles.small_text_body_layout3
                  )}>
                  {'2022/03/01'}
                </div>
              </div>
            </div>
            <div className={cn(styles.flex2_spacer)} />
            <div className={cn(styles.flex2_item1)}>
              <Button className={cn(styles.image11, styles.image11_layout)}>DATE PICKER</Button>
            </div>
          </div>

          <div
            className={cn(
              styles.small_text_body,
              styles.small_text_body_layout4
            )}>
            {'Time:'}
          </div>

          <div className={cn(styles.flex2, styles.flex2_layout)}>
            <div className={cn(styles.flex2_item)}>
              <div
                className={cn(styles.cover_block2, styles.cover_block2_layout)}>
                <div
                  className={cn(
                    styles.small_text_body,
                    styles.small_text_body_layout5
                  )}>
                  {'14:05'}
                </div>
              </div>
            </div>
            <div className={cn(styles.flex2_spacer)} />
            <div className={cn(styles.flex2_item2)}>
              <Button className={cn(styles.image11, styles.image11_layout)}>TIME PICKER</Button>
            </div>
          </div>

          <div className={cn(styles.flex4, styles.flex4_layout)}>
            <div
              className={cn(
                styles.small_text_body1_box,
                styles.small_text_body1_box_layout
              )}>
              <pre className={cn(styles.small_text_body1)}>{'Recurring '}</pre>
            </div>
            <div className={cn(styles.flex4_spacer)} />
            <div className={cn(styles.flex4_item)}>
              <div className={cn(styles.box4, styles.box4_layout)} />
            </div>
            <div className={cn(styles.flex4_spacer1)} />
            <div
              className={cn(
                styles.small_text_body,
                styles.small_text_body_layout6
              )}>
              {'Daily:'}
            </div>
            <div className={cn(styles.flex4_spacer2)} />
            <div className={cn(styles.flex4_item)}>
              <div
                className={cn(styles.cover_block1, styles.cover_block1_layout)}>
                <div className={cn(styles.box6, styles.box6_layout)} />
              </div>
            </div>
            <div className={cn(styles.flex4_spacer3)} />
            <div
              className={cn(
                styles.small_text_body,
                styles.small_text_body_layout7
              )}>
              {'Weeky:'}
            </div>
            <div className={cn(styles.flex4_spacer4)} />
            <div className={cn(styles.flex4_item)}>
              <div className={cn(styles.box7, styles.box7_layout)} />
            </div>
            <div className={cn(styles.flex4_spacer5)} />
            <div
              className={cn(
                styles.small_text_body,
                styles.small_text_body_layout8
              )}>
              {'Monthly:'}
            </div>
            <div className={cn(styles.flex4_spacer6)} />
            <div className={cn(styles.flex4_item)}>
              <div className={cn(styles.box7, styles.box7_layout)} />
            </div>
            <div className={cn(styles.flex4_spacer7)} />
            <div
              className={cn(
                styles.small_text_body2_box,
                styles.small_text_body2_box_layout
              )}>
              <pre className={cn(styles.small_text_body2)}>{'Yearly: '}</pre>
            </div>
            <div className={cn(styles.flex4_spacer8)} />
            <div className={cn(styles.flex4_item)}>
              <div className={cn(styles.box7, styles.box7_layout)} />
            </div>
          </div>

          <hr className={cn(styles.line1, styles.line1_layout)} />

          <div className={cn(styles.flex5, styles.flex5_layout)}>
            <div
              className={cn(
                styles.small_text_body11,
                styles.small_text_body11_layout
              )}>
              {'Monday'}
            </div>
            <div className={cn(styles.flex5_spacer)} />
            <div className={cn(styles.flex5_item)}>
              <div
                className={cn(styles.cover_block4, styles.cover_block4_layout)}>
                <div
                  className={cn(styles.image10, styles.image10_layout)}
                />
              </div>
            </div>
            <div className={cn(styles.flex5_spacer1)} />
            <div
              className={cn(
                styles.small_text_body12,
                styles.small_text_body12_layout
              )}>
              {'Tuesday'}
            </div>
            <div className={cn(styles.flex5_spacer)} />
            <div className={cn(styles.flex5_item1)}>
              <div className={cn(styles.box1, styles.box1_layout)} />
            </div>
            <div className={cn(styles.flex5_spacer2)} />
            <div
              className={cn(
                styles.small_text_body13,
                styles.small_text_body13_layout
              )}>
              {'Wednesday'}
            </div>
            <div className={cn(styles.flex5_spacer3)} />
            <div className={cn(styles.flex5_item)}>
              <div className={cn(styles.box2, styles.box2_layout)} />
            </div>
            <div className={cn(styles.flex5_spacer4)} />
            <div
              className={cn(
                styles.small_text_body14,
                styles.small_text_body14_layout
              )}>
              {'Thursday'}
            </div>
            <div className={cn(styles.flex5_spacer5)} />
            <div className={cn(styles.flex5_item)}>
              <div className={cn(styles.box2, styles.box2_layout)} />
            </div>
            <div className={cn(styles.flex5_spacer6)} />
            <div
              className={cn(
                styles.small_text_body15,
                styles.small_text_body15_layout
              )}>
              {'Friday'}
            </div>
            <div className={cn(styles.flex5_spacer7)} />
            <div className={cn(styles.flex5_item)}>
              <div className={cn(styles.box2, styles.box2_layout)} />
            </div>
            <div className={cn(styles.flex5_spacer8)} />
            <div
              className={cn(
                styles.small_text_body16,
                styles.small_text_body16_layout
              )}>
              {'Saturday'}
            </div>
            <div className={cn(styles.flex5_spacer9)} />
            <div className={cn(styles.flex5_item)}>
              <div
                className={cn(styles.cover_block4, styles.cover_block4_layout)}>
                <div
                  className={cn(styles.image10, styles.image10_layout1)}
                />
              </div>
            </div>
            <div className={cn(styles.flex5_spacer10)} />
            <div
              className={cn(
                styles.small_text_body17,
                styles.small_text_body17_layout
              )}>
              {'Sunday'}
            </div>
            <div className={cn(styles.flex5_spacer11)} />
            <div className={cn(styles.flex5_item)}>
              <div className={cn(styles.box2, styles.box2_layout)} />
            </div>
          </div>
        </div>
      </px-posize>
    </div>
  );
}

MainPage.inStorybook = true;
