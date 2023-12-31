import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicInfo } from './basicinfo.model';
declare var $: any;
@Component({
    selector: 'app-landing-selection',
    templateUrl: './landing-selection.component.html',
    styleUrls: ['./landing-selection.component.css']
})
export class LandingSelectionComponent implements OnInit {
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    basicInfoForm: FormGroup;
    moreAboutForm: FormGroup;
    public basicinfoModel: BasicInfo = new BasicInfo;

    isBasic: boolean = false;
    isMore: boolean = false;
    isSelection: boolean = false;

    constructor(private element: ElementRef) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');

        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    nextBasicInfo() {
        this.isBasic = true;
        this.isMore = true;
        this.isSelection = false;

    }
    basicInfoSkip() {
        this.isBasic = true;
        this.isMore = true;
        this.isSelection = false;

    }
    backToBasic() {
        this.isBasic = false;
        this.isMore = false;
        this.isSelection = false;

    }
    skipMoreAbout() {
        this.isBasic = true;
        this.isMore = false;
        this.isSelection = true;

    }
    backToAbout() {
        this.isBasic = true;
        this.isMore = true;
        this.isSelection = false;

    }
    
}
