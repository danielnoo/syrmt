import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic04 from '../images/pic04.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="Shaun Young on a boat" />
          </span>
          <p>
            Hi. I'm Shaun and I've been working in Toronto as a registered massage therapist for 7 years. If I'm not working I'm probably playing sports. I'm currently the commissioner of the Toronto Gay Basketball association, and I also play as much tennis as possible in addition to ultimate frisbee.
          </p>
          <p>
            If you're interested in booking an appointment, use the contact form to send me an email. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic04} alt="A hand massaging the lower back of a patient" />
          </span>
          <p>
            I specialize in the following massage methods:<br/>
            <br/>
            Swedish Massage <br/>
            Hot Stone Massage<br/>
            Deep Tissue Massage<br/>
            Sports Massage<br/>
            Trigger Point Massage<br/>
            Pre-natal Massage
          </p>
          <p>
            If you're interested in booking an appointment, use the contact form to send me an email. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Location</h2>
          <span className="map-responsive">
          <iframe title="Google map of spa location with pin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2188074692203!2d-79.41619778424236!3d43.6644189791209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349278f16541%3A0xa70f153512d7a344!2s619A%20Bloor%20St%20W%2C%20Toronto%2C%20ON%20M6G%201K8!5e0!3m2!1sen!2sca!4v1628538343798!5m2!1sen!2sca" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
          </span>
          <p>
            Find me at 619a Bloor st. west, Toronto, Ontario, M6G 1K8 
            By transit it's a quick walk from Bathurst subway station. 
            There is a Green P parking lot at 696 Euclid Avenue, just north of Bloor.
          </p>
          

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:dannynoo@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" placeholder="Tell me about what you'd like me to help you with and let me know your availability. I'll respond and work with you to set up and appointment." data-gramm="false"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/shaun.young.7311" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shaun-young-b2383686/?originalSubdomain=ca" className="icon fa-linkedin">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
