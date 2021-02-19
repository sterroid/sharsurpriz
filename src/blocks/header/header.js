/**
 * @file Implementation of the header block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'header';

// Element class names
const CLASSNAME = {
    BLOCK: BLOCK_NAME,
};

// Element selectors
const SELECTOR = {
    BLOCK: `.${BLOCK_NAME}`,
};

// Map of DOM elements
const elements = {};

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here


// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the header block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */



export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }
    

    //On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('.nav').addClass('navShadow') : $('.nav').removeClass('navShadow');
		windowTop > 100 ? $('.nav__list').css('top','100px') : $('.nav__list').css('top','160px');
    });

    //Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
    });
    

    //Toggle Menu BURGER
	$('.nav__burger-button').on('click', () => {
		$('.nav__burger-button').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('.nav__burger-button').removeClass('closeMenu');
		});
	});
    

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------
