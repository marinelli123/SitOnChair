document.addEventListener("DOMContentLoaded", function () {


    var next = document.getElementById('right_arrow'),
        prev = document.getElementById('left_arrow'),
        allImages = document.querySelectorAll('.middle__section__image img'), //our img elements
        indexOfImage = 0; //this is our first index to show first image with that number

    console.dir(allImages);
    allImages[indexOfImage].className = 'visible'; //we set class name to visible image with index number from "indexOfImage"

    next.addEventListener('click', function (ev) {
        //if pressed next btn then current image (from index = indexOfImage) will have empty class
        allImages[indexOfImage].className = '';

        //we check if our indexOfImage are equal to last element of our table with images(allLiElements.length-1)


        if (indexOfImage === allImages.length-1) {
            indexOfImage = 0;         //so first index of image will be 0 - so first one;
            allImages[indexOfImage].className = 'visible'; //and show current image with correct index
        }

        else         {
            indexOfImage++; //if first "if" are not true we increase index by 1 (we want to see next image)
            allImages[indexOfImage].className = 'visible'; //so here we will see next image
        }

    });

    prev.addEventListener('click', function (ev) {
        allImages[indexOfImage].className = '';

        //we check after pressed prev button if our index are first image, if this is true we are doing:
        if (indexOfImage === 0) {
            indexOfImage = allImages.length-1; //set current index to the last image. Our last image is "allLiElements.length-1"
            allImages[indexOfImage].className = 'visible'; //so we now display last photo
        } else {
            indexOfImage--; //normally we want to see previous photo se we decrease by 1 our index
            allImages[indexOfImage].className = 'visible'; //so now we show current photo after pressing prev btn
        }
    });

});