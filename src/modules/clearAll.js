import Storage from './localStorage.js';

export default class ClearAll {
    static clearBtnFun = () => {
      const clearBtn = document.querySelector('.clear');
      const UL = document.querySelector('#list');
      const removeSpin = () => {
        clearBtn.classList.remove('fa-spin');
      };
      clearBtn.addEventListener('click', () => {
        let arr = Storage.takingFromStorage();
        arr = [];
        clearBtn.classList.add('fa-spin');
        setTimeout(removeSpin, 1000);
        UL.innerHTML = '';
        localStorage.setItem('library', JSON.stringify(arr));
      });
    }
}