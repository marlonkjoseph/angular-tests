import { DebugElement } from "@angular/core";
// Custom matchers that checks the existence of th element
// and if they contain the hidden attribute.
function toBeDisplayed() {
    return {
        compare: function(el: DebugElement) {
            const result = {
                pass: !!el && !el.nativeElement.hasAttribute('hidden')
            }
            if (!result.pass) {
                result['message'] = "Expected element to be displayed";
            }
            return result;
        }
    };
}

// Custom matchers that checks the existence of th element
// and if they contain the hidden attribute.
function notToBeDisplayed() {
    return {
        compare: function(el: DebugElement) {
            const result = {
                pass: !el || el.nativeElement.hasAttribute('hidden')
            }
            if (!result.pass) {
                result['message'] = "Expected element not to be displayed";
            }
            return result;
        }
    };
}

export { toBeDisplayed, notToBeDisplayed }