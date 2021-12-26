export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try{
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e) {}
    }

    bindTriggers(off, items, count) {
        off.querySelector('.plus').addEventListener('click', () => {
            if (count !== items.length - 2) {
                items[count].style.display = 'flex';
                items[count].classList.add('animated','fadeIn');
                count++;
            } else {
                items[count].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });

    }

    hideItems(obj) {
        obj.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch(e) {}
    }
}