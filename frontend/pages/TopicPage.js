function TopicPage() {
    return (
       <>
            <h2>Web Development Concepts</h2>
            <nav class = "Local">
                <a href = "#idea1">Web Servers</a>
                <a href = "#idea2">Frontend design</a>
                <a href = "#images">Optimizing images</a>
                <a href = "#favicon">Favicons</a>
            </nav>
            <article id="idea1" class = "Topics">
                <h3>Web Servers</h3>
                <p>
                    You can think of index as the <strong> Name of the resource at the server.</strong> This resource helps find what. 
                    the client wants and it will be sent back to the client. Concerning websites, you can think of index as the main homepage of your website. 
                    One way to think about this homepage is that it is the "table of contents" of your website. This homepage will then be edited by
                    Javascript and CSS. Lastly, you can inspect elements of this index file and see necessary information like <strong>cache details,
                    content type, dates, etc.</strong>                    
                </p>
                <p>
                    What can be seen in the brower's web dev/inspector network are the files that make up the webpage. When you click on one of the files e.g. 
                    index.html you get a lot of important information. You access this information by right clicking the website and then clicking inspect. 
                    Then you want to click the double arrow next to console and then click network. Lastly click disable cache and refresh the page. This will 
                    allow you to see all of the files that make up the webpage. You can then click on the files to see <strong>URL, request method, status code, 
                    and IP. </strong> The URL and IP address is self explanatory. The request method and status code tells us if we are able to retrieve what we 
                    requested. So as we can see, the request method is a GET method and the status code is 200 so everything is working perfectly. All of this 
                    information can be used to help you make sure you uploaded things correctly.                     
                </p>
                <p>
                    The favicon.ico has a status of 200 because it was retrieved successfully. The favicon.ico is an image that appears next to our website's
                    title which is in our tab. The main.css and main.js do not have a status 200 but a status of 404 because it does not exist. So there is 
                    nothing to be retrieved.                    
                </p>
                <p>
                    The scheme of the URL is <strong>https://</strong>. This scheme tells us how information is transferred between client and brower.
                    The s in https is important because it tells us that it is secured. The subdomain is <strong>web.</strong>. This is just another domain,
                    but it is attached to the host domain. The host domain is <strong>engr.oregonstate.edu</strong>. This is what gives us the website access.
                    The resource is <strong>/~lude/a1-lude/</strong>. This is the name of the file that gives us the website.                     
                </p>
            </article>
            <article id = "idea2">
                <h3>Frontend Design</h3>
                <p>
                    Think of good frontend design as the ability to use and have a visually appealing website. Frontend design covers the <strong>visual design</strong>
                    of the page. It also covers the <strong>graphical user-interface</strong>. Lastly, it also covers the <strong>interactive experience</strong>. If you miss
                    even one of these aspects, consider the website as incomplete. If the website is incomplete, then you failed as a frontend designer/engineer. If your boss
                    wanted something incomplete, then there would be no reason to hire a frontend designer/engineer.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>The user get what they want when they interact with the product.</dd>
                    <dt>Efficient</dt>
                    <dd>The user gets what they want as fast as possible.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>Able to use the product with little to no outside help.</dd>
                    <dt>Error-free</dt>
                    <dd>Makes it impossible for the user to get any error while using the product for their needs.</dd>
                    <dt>Enjoyable</dt>
                    <dd>The user loved their time while using the website and will come back again.</dd>
                </dl>
                <p>
                    You can think of the <strong>header tag</strong> as the introduction of your paper. It will include introductory information like the name of your webpage
                    for instance. It will be the first piece of information to let the user know what to expect. The <strong>nav tag</strong> can be think about as a little handyman.
                    When you click on something that has the nav tag, it will take you to another place that it is set to. The <strong>main tag</strong> holds the "meat" of your product.
                    To be more specific, it is what the user is going to look at for the majority of the time they are on the product. The <strong>section tag</strong> is like a handy sticky note.
                    It tells you that all of the information that it contains are related to each other. The <strong>article tag</strong> is an even more specific sticky note that tells the user 
                    the topic of what they are talking about in the tag. The <strong>aside tag</strong> is information not directly related to the main content. The <strong>figure tag</strong> is 
                    also stuff not directly related to the main content but it deals with things like media. The <strong>blockquote tag</strong> is for large quotes that you want to include. 
                    The <strong>footer tag</strong> basically holds your copyright of the product. Lastly, the <strong>div tag</strong> helps you separate your content. But the problem with this tag
                    is that it has no style. A user if they access your source html code, would be confused about the purpose of each part of the code if you just use div tags. 
                </p>
                <ol>
                    <li>Anchors link to an external content by using an <strong>absolute path</strong>. This is a complete URL.</li>
                    <li>Anchors link to an internal content by using the "ID" assigned to the particular content you want to link to.</li>
                    <li>
                        Anchors link to page from page by using the <strong>relative path</strong>.
                        <ol>
                            <li>If linking to <strong>same directory</strong>, use the "./" before name of file.</li>
                            <li>If linking to something <strong>down the child directories</strong>, use name of directory, then use "/", then use the name of the file.</li>
                            <li>If linking to something <strong>up the parent directories</strong>, use "../". One ".." equals to moving up directory by one.</li>
                        </ol>
                    </li>
                </ol>
            </article>
            <article id = "images">
                <h3>Optimizing images</h3>
                <p>
                    The 6 major specifications of images for the web are descriptive file name, small file size, exact dimensions,
                    correct file format, reduced resolution and color mode. We need a descriptive file name because it helps improves search engine optimization and that is extremely important,
                    because it helps people find your website more easily. The small file size is important because it helps improve usability of the website. People would be put off from using 
                    your website if it takes forever to load images. The small file size helps speed up images loading time. Exact dimensions are important for the same reason as file size. It
                    helps speeds up your images loading time and thus will help with the usability of your website. File format is important because depending on how you save your files, the image 
                    could come off as blurry and you don't want that! Reduced resolution is important because it could affect usability as well. Someone could be viewing your website on a monitor that
                    can only display at a lower resolution. A "higher tier" resolution would look plain weird. So multiple resolutions are important for usability. Lastly, color mode is important because the color 
                    of your image can make the image look terrible depending on the color of your website background. 
                </p>
                <p>
                    The best file format for photos are JPG and WebP. The best file format for line art are GIF, PNG, and SVG. The SVG format is best for two dimensional images. This makes it best for line art 
                    because line are things like logos which are typically considered as a two dimensional image. Gifs are great for line art as well because gifs are typically just line art but animated. Lastly, 
                    PNG is great for line art because of lossless compression. The line art will still maintain good image quality thanks to this. JPG are best for photos because of file compression as well. photos
                    typically have a lot of detail in it. You will need JPG whose job is to work with large files like photos and compress them in a way to maintain image quality! Lastly, WebP is also great for photos
                    for the same reason as JPG. You are able to compress the photos to a more manageable file size and allow it to load faster on a website. 
                </p>
            </article>
            <article id = "favicon">
                <h3>Favicons</h3>
                <p>
                    Browers uses favicons by displaying it in the brower tab. Also you can make use of the favicon image inside your website by displaying it there. Devices can make use of favicons by using it to indicate 
                    your website on your computer desktop. Essentially, your shortcut that you click on to go to your website will display your favicon. 
                </p>
            </article>
        </>
    );
}
export default TopicPage;