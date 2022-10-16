function findElementByAtt(path, selector) {

    for (element of path) {
        try {
            if (element.hasAttribute("comp-type")) {
                if (element.getAttribute("comp-type") === selector) {
                    return element
                }
            }
        }
        catch (err) {
            return false;
        }
    };
}



