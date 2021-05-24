function slider() {
    this.imgs = [];
    this.currentImg = 0;
    this.buttonPrev = null; 
    this.buttonNext = null;
    this.sliderImg = null;

    this.start = function(elid) {
        let that = this;
        
        let el = document.getElementById(elid);
        
        this.buttonPrev = el.querySelector('.toPreviousImg');
        this.buttonNext = el.querySelector(".toNextImg");
        this.sliderImg = el.querySelector(".slideimg");

        this.buttonPrev.addEventListener('click', function(e) {
            that.onPrevBtnClick();
        });
        this.buttonNext.addEventListener('click', function(e) {
            that.onNextBtnClick();
        });

        this.imgs.push('https://static.boredpanda.com/blog/wp-content/uploads/2018/07/worlds-most-beautiful-nigerian-girl-jare-but-mofe-fb.png');
        this.imgs.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnngKthIkcYhdhMGrB7T-oQux1OFqXYWBpWA&usqp=CAU');
        this.imgs.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlp6KiADVCF1LGZDP79xdBd1sJue4Ja_lGw&usqp=CAU');
        this.imgs.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIqLMZs6IWlTdQ_9J0_xXu-Goeq3j1sIlKA&usqp=CAU');

        this.sliderImg.src = this.imgs[this.currentImg];
        this.buttonNext.disabled = false;
        this.buttonPrev.disabled = true;
    };

    this.onPrevBtnClick = function() {
        this.currentImg--;
        if (this.currentImg === 0) {
            this.buttonPrev.disabled = true;
            this.sliderImg.src = this.imgs[this.currentImg];
        }
        this.sliderImg.src = this.imgs[this.currentImg];
        this.buttonNext.disabled = false;
    };

    this.onNextBtnClick = function() {
        this.currentImg++;
        if (this.currentImg === (this.imgs.length - 1)) {
            this.buttonNext.disabled = true;
        }
        this. sliderImg.src = this.imgs[this.currentImg];
        this.buttonPrev.disabled = false;
    };
}