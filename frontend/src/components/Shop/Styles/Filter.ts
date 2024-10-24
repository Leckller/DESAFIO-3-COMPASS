import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

export const StyledFilter = styled.section`
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    background-color: ${(p) => (p.theme as ITheme).Gold_md} !important;
    padding: 16px;
    flex-wrap: wrap;
    gap: 16px;

    section:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        display: flex;
        justify-content: center;
        gap: 8px;
        align-items: center;
        background-color: transparent;
        border: none;
      }
    }

    section {
      display: flex;
      flex-direction: row !important;
      flex-wrap: wrap;
      gap: 16px;

      label {
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        input {
          width: 62px;
        }

        input, select {
          outline: none;
          border: none;
          padding: 8px;
        }
      }
    }
  `;