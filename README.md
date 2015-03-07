sliderscroll
============

A jquery plugin for timeline-esque sliding

A nice simple way of defining regions & menu and the navigation slides to that point.
It also detects where you are on the page in the menu and adds active state. Have used on a few sites and works nicely.

Html layout like so, for each of the sections you want on the page:
```html
<article id="one" class="timeline-section">
    <p>Section One</p>
</article>
<article id="two" class="timeline-section">
    <p>Section Two</p>
</article>
<article id="three" class="timeline-section">
    <p>Section Three</p>
</article>
<article id="four" class="timeline-section">
    <p>Section Four</p>
</article>
<article id="five" class="timeline-section">
    <p>Section Five</p>
</article>
<article id="six" class="timeline-section">
    <p>Section Six</p>
</article>
<article id="seven" class="timeline-section">
    <p>Section Seven</p>
</article>
<article id="eight" class="timeline-section">
    <p>Section Eight</p>
</article>
<article id="nine" class="timeline-section">
    <p>Section Nine</p>
</article>
<article id="ten" class="timeline-section">
    <p>Section Ten</p>
</article>
```

Then for the clickable menu that clicks and slides to each of those sections:
```html
<ul class="main" id="timenav">
    <li><a href="#one">One</a></li>
    <li><a href="#two">Two</a></li>
    <li><a href="#three">Three</a></li>
    <li><a href="#four">Four</a></li>
    <li><a href="#five">Five</a></li>
    <li><a href="#six">Six</a></li>
    <li><a href="#seven">Seven</a></li>
    <li><a href="#eight">Eight</a></li>
    <li><a href="#nine">Nine</a></li>
    <li><a href="#ten">Ten</a></li>
</ul>
```

Then in your jquery call to the plugin:
```html
<script type="text/javascript">
    $(document).ready(function(){
        console.log('ready');
        // slidescroll
        $('.placholder-timeline').slidescroll({
                idname      : '.timeline-section',
                navname     : '#timenav',
                speed       : 500,
                plusScroll  : 150,
                plusMinus   : 'minus'
         });
    });
</script>
```

As you can see you have all the options in the plugin to select the name of the sections
the nav name, the speed of the slide when any item is clicked;

