import Storage from './localStorage.js';

export default class TaskCompletedFunc{

    // static taskDefault = () => {
    //     const arr = Storeage.takingFromStorage();
    //     arr.forEach((task) => {
    //       task.completed = true;
    //     });
    //   localStorage.setItem('library', JSON.stringify(arr));
    //   }

    static checkBox = () => {
        const UL = document.querySelector('#list');
        UL.addEventListener('click', (e) => {
        const checkBoxBtn = e.target.parentElement.parentElement.children[0].children[0]
        if (checkBoxBtn && checkBoxBtn.checked) {
            console.log('Up and jiggy')
            const arr = Storage.takingFromStorage();
            // arr[]
            task.completed = true;
            Storage.updateIndex()
        
        }
    //     if (checkBoxBtn.classList.contains('checker')) {
    //         console.log('We are on point')
    //     }
       }
       )

    }

}