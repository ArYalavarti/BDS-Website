function renderfooter (pathextension){
    var html = `<div class="section contact-and-footer">
                    <section class="section footer-section">
                    <div class="center-container footer-container">
                        <img src="${pathextension}images/logos/logosmall.png" width="70px" class="footer-logo">
                        <div>
                            <a href="https://www.facebook.com/browndatascience/" class="w-inline-block">
                                <img src="${pathextension}images/main/facebook3.svg" width="25" class="social-icon">
                            </a>
                            <a href="https://twitter.com/browndatathon" class="w-inline-block">
                                <img src="${pathextension}images/main/twitter3.svg" width="25" class="social-icon">
                            </a>
                            <a href="https://www.instagram.com/browndatascience/" class="w-inline-block">
                                <img src="${pathextension}images/main/instagram.png" width="25" class="social-icon">
                            </a>
                        </div>
                    </div>
                    <div class="wide-container w-container">
                    <div class="center-container">
                        <a href="${pathextension}index.html" class="footer-link">Home</a>
                        <a href="${pathextension}datathon/index.html" class="footer-link">Datathon</a>
                        <a href="${pathextension}datathon/conduct/index.html" class="footer-link">Code of Conduct</a>
                        <a href="mailto:bds@brown.edu" class="footer-link">Contact</a>
                    </div>
                    </div>
                    <div class="copyright"> Copyright © 2019 Brown University Data Science. All Rights Reserved. <br/>
                    Brown University. Providence, RI 02912 <br/> For more data science opportunities and resources,
                    check out the Brown Data Science Initiative. </div> </section> </div>`;
    html = $.parseHTML(html);
    $("body:first").append(html);
}
