import React from 'react';

import GitHubLogo from '../img/githubpng.png';
import LinkedInLogo from '../img/linkedinlogo.png';
import YouTubeLogo from '../img/youtubepng.png';

function Footer() {
    return (
        <div className='text-center'>
            <footer>
                <a href="https://github.com/ScottsC0de" target="_blank"><img src={GitHubLogo}
                    alt="GitHub logo linked to my account" width={55} height={55}></img></a>
                <a href='www.linkedin.com' target='_blank'><img src={LinkedInLogo} alt='LinkedIn logo' width={70} height={70}></img></a>
                <a href="https://www.youtube.com/channel/UCk-sgTvFeA_LQx-MTba9tZA" target="_blank"><img
                    src={YouTubeLogo} alt="YouTune logo linked to my account" width={70}
                    height={70}></img></a>
            </footer>
        </div>
    );
};

export default Footer;