import { savannahData } from '../savannah/constants';
import { createWordsBtns } from '../savannah/createWordsBtns';

export const createSavannahPage = () => `
  <section class="savannah__screen-wrapper" id="savannah-wrapper">
      <div class="screen-wrapper__hints-bar">
          <div class="hint hint-voice">
              <div class="hints-bar__voice" id="savannah-voice">
                  <div class="hints-bar__voice-off inactive" id="savannah-voice-off"></div>
              </div>
          </div>
          <div class="hints-bar__text hint">${savannahData.hintText}</div>
          <div class="hints-bar__lives hint" id="lives"></div>
      </div>
      <div class="screen-wrapper__words-container" id="words-container">
          ${createWordsBtns()}
      </div>
      <div class="screen-wrapper__points-counter" id="counter">0</div>
      <div class="screen-wrapper__question" id="question"></div>
  </section>
`;
