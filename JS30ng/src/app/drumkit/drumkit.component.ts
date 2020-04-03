import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
    selector: 'drumkit',
    templateUrl: './drumkit.component.html',
    styleUrls: ['./drumkit.component.scss']
})

export class DrumkitComponent implements AfterViewInit, OnDestroy {
    @ViewChild('body') body: ElementRef;
    @ViewChild('aBox') aBox: ElementRef;
    @ViewChild('sBox') sBox: ElementRef;
    @ViewChild('dBox') dBox: ElementRef;
    @ViewChild('fBox') fBox: ElementRef;
    @ViewChild('gBox') gBox: ElementRef;
    @ViewChild('hBox') hBox: ElementRef;
    @ViewChild('jBox') jBox: ElementRef;
    @ViewChild('kBox') kBox: ElementRef;
    @ViewChild('lBox') lBox: ElementRef;
    @ViewChild('aHeader') aHeader: ElementRef;
    @ViewChild('sHeader') sHeader: ElementRef;
    @ViewChild('dHeader') dHeader: ElementRef;
    @ViewChild('fHeader') fHeader: ElementRef;
    @ViewChild('gHeader') gHeader: ElementRef;
    @ViewChild('hHeader') hHeader: ElementRef;
    @ViewChild('jHeader') jHeader: ElementRef;
    @ViewChild('kHeader') kHeader: ElementRef;
    @ViewChild('lHeader') lHeader: ElementRef;
    @ViewChild('aParagraph') aParagraph: ElementRef;
    @ViewChild('sParagraph') sParagraph: ElementRef;
    @ViewChild('dParagraph') dParagraph: ElementRef;
    @ViewChild('fParagraph') fParagraph: ElementRef;
    @ViewChild('gParagraph') gParagraph: ElementRef;
    @ViewChild('hParagraph') hParagraph: ElementRef;
    @ViewChild('jParagraph') jParagraph: ElementRef;
    @ViewChild('kParagraph') kParagraph: ElementRef;
    @ViewChild('lParagraph') lParagraph: ElementRef;

    playInstrument: any;
    unPlayInstrument: any;

    constructor(private renderer: Renderer2) { }

    playAudio(path: string) {
        const audio = new Audio(path);
        audio.load();
        audio.play();
    }

    ngAfterViewInit() {
        this.playInstrument = this.renderer.listen(window, "keydown", (event) => {
            if (event.keyCode === 65) {
                this.aBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.aHeader.nativeElement.style.fontSize = "38px";
                this.aParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/clap.wav')
            } else if (event.keyCode === 83) {
                this.sBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.sHeader.nativeElement.style.fontSize = "38px";
                this.sParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/hihat.wav')
            } else if (event.keyCode === 68) {
                this.dBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.dHeader.nativeElement.style.fontSize = "38px";
                this.dParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/kick.wav')
            } else if (event.keyCode === 70) {
                this.fBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.fHeader.nativeElement.style.fontSize = "38px";
                this.fParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/openhat.wav')
            } else if (event.keyCode === 71) {
                this.gBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.gHeader.nativeElement.style.fontSize = "38px";
                this.gParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/boom.wav')
            } else if (event.keyCode === 72) {
                this.hBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.hHeader.nativeElement.style.fontSize = "38px";
                this.hParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/ride.wav')
            } else if (event.keyCode === 74) {
                this.jBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.jHeader.nativeElement.style.fontSize = "38px";
                this.jParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/snare.wav')
            } else if (event.keyCode === 75) {
                this.kBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.kHeader.nativeElement.style.fontSize = "38px";
                this.kParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/tom.wav')
            } else if (event.keyCode === 76) {
                this.lBox.nativeElement.style.boxShadow = "0 0 5px 5px goldenrod";
                this.lHeader.nativeElement.style.fontSize = "38px";
                this.lParagraph.nativeElement.style.fontSize = "15px";
                this.playAudio('../../assets/sounds/tink.wav')
            }
        })

        this.unPlayInstrument = this.renderer.listen(window, "keyup", (event) => {
            if (event.keyCode === 65) {
                this.aBox.nativeElement.style.boxShadow = "none";
                this.aHeader.nativeElement.style.fontSize = "34px";
                this.aParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 83) {
                this.sBox.nativeElement.style.boxShadow = "none";
                this.sHeader.nativeElement.style.fontSize = "34px";
                this.sParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 68) {
                this.dBox.nativeElement.style.boxShadow = "none";
                this.dHeader.nativeElement.style.fontSize = "34px";
                this.dParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 70) {
                this.fBox.nativeElement.style.boxShadow = "none";
                this.fHeader.nativeElement.style.fontSize = "34px";
                this.fParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 71) {
                this.gBox.nativeElement.style.boxShadow = "none";
                this.gHeader.nativeElement.style.fontSize = "34px";
                this.gParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 72) {
                this.hBox.nativeElement.style.boxShadow = "none";
                this.hHeader.nativeElement.style.fontSize = "34px";
                this.hParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 74) {
                this.jBox.nativeElement.style.boxShadow = "none";
                this.jHeader.nativeElement.style.fontSize = "34px";
                this.jParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 75) {
                this.kBox.nativeElement.style.boxShadow = "none";
                this.kHeader.nativeElement.style.fontSize = "34px";
                this.kParagraph.nativeElement.style.fontSize = "14px";
            } else if (event.keyCode === 76) {
                this.lBox.nativeElement.style.boxShadow = "none";
                this.lHeader.nativeElement.style.fontSize = "34px";
                this.lParagraph.nativeElement.style.fontSize = "14px";
            }
        })
    }

    ngOnDestroy() { this.playInstrument(); this.unPlayInstrument(); }


}