import React from "react";
import "../../assets/styles/background.scss";
import { Row, Col } from "react-bootstrap";
// const appendixData = require("../../../assets/data/john_hunt_appendix.json");
import { StaticImage } from "gatsby-plugin-image";
const Family = () => {
  // const term = (term) => (
  //   <p className="background-text">
  //     <strong>{term.term}</strong>: {term.definition}
  //   </p>
  // );
  return (
    <Row>
      <Col className="background-col">
        <br />
        <h4 className="background-text">Background: Essay</h4>
        <div className="appendix-text essay" id="family">
          <h2 class="c0 c31">
            <span class="c13 c18">&nbsp;“About Home:” The Hunt Family</span>
          </h2>
          <StaticImage
            className="essay-image"
            alt=""
            src="../../assets/images/image10.jpg"
          />{" "}
          <p class="c0">
            <span class="c9">
              The oldest son of Robert and Abigail Hunt of Haddonfield Monthly
              Meeting, John was born in August of 1740. John’s mother died when
              he was very young and Robert then married a young widow, Martha
              Ward, in 1749. John Hunt was subsequently apprenticed to George
              Matlack (1717-1766), a Quaker carpenter in Evesham.
            </span>
          </p>
          <p class="c0">
            <span class="c10">
              John Hunt suffered one great public embarrassment. He and Esther
              Warrington, daughter of Henry and Elizabeth (Bishop) Warrington,
              were married on March 17, 1763, under the care of Evesham Monthly
              Meeting. Their first child, William, was born on July 29, a scant
              4-½ months after the marriage. John Hunt offered an
              acknowledgement to the Monthly Meeting. The apology was accepted,
              and John Lippincott was appointed to read it aloud at a “publick
              first day meeting” at Chester, John and Esther Warrington Hunt’s
              home meeting house.
            </span>
            <sup class="c8">
              <a href="#ftnt16" id="ftnt_ref16">
                [16]
              </a>
            </sup>
            <span class="c9">
              &nbsp;With this, the disciplinary act was concluded. By 1766, John
              was appointed as delegate to Salem Quarterly Meeting.
            </span>
          </p>
          <p class="c0">
            <span class="c9">
              John and Esther Warrington Hunt had ten children between 1763 and
              1785. Three -- William (1763-1764), Rachel (1773-1775) and a
              second William (1776-1778) -- died in infancy. The others all
              lived into adulthood. John Hunt’s journal, like other journals of
              the time, did not sketch out in detail his home life, but there
              were numerous references to working with his male children and to
              his wife Esther accompanying him on his many travels to meetings.
              Esther supported John Hunt in his speaking in meeting. Abigail,
              who frequently accompanied her father on his travels, spoke in
              meeting, and, in March 1818, accompanied him to Select Meeting for
              the first time. Despite the lack of descriptive detail, the Hunt
              family frequently worked and traveled together. &nbsp;The
              children, even in their adult years, were referred to
              affectionately by their nicknames -- “Samme” rather than Samuel
              and “Bennie” rather than Benjamin -- suggesting a level of
              intimacy between Hunt and his children.{" "}
            </span>
          </p>
          <StaticImage
            className="essay-image"
            alt=""
            src="../../assets/images/image8.jpg"
          />{" "}
          <p class="c0">
            <span class="c9">
              Hunt’s family connections extended far beyond his immediate kin.
              He was born into and married within a network of Quaker family
              relationships in southern New Jersey. John Hunt’s father, Robert,
              was a first cousin to John Woolman (1720-1772), journalist and
              minister.
            </span>
          </p>
          <p class="c0">
            <span class="c9">
              Esther Hunt’s nephew, Abraham Warrington, married Rachel Evans,
              daughter of John Hunt’s friend and fellow minister, Joshua Evans.
              Other close connections included the Coles, Roberts, Haines, and
              numerous others.
            </span>
          </p>
          <p class="c0">
            <span class="c9">
              &nbsp;Disease was a common occurrence and likely to prove fatal.
              At times John Hunt secured the services of a French doctor from
              Philadelphia. Samme’s illnesses and death in 1791 were described
              in detail. While no details of the births of his children are
              given, the health of his wife, Esther, was a deep concern.{" "}
            </span>
          </p>
          <p class="c0">
            <span class="c10">
              When the longer manuscript journal resumed on July 8, 1812. Hunt
              was 72 and less active. He travelled less often in the ministry
              and began to write about his sons helping him rather than helping
              his sons. In August of 1819, for instance, he wrote, “I have not
              earned so much money in a day for several years past.”
            </span>
            <sup class="c8">
              <a href="#ftnt17" id="ftnt_ref17">
                [17]
              </a>
            </sup>
            <span class="c10">
              &nbsp;A year later he penned, “Got a fall from the top of the pump
              and I think I had like to have broke my arm.”
            </span>
            <sup class="c8">
              <a href="#ftnt18" id="ftnt_ref18">
                [18]
              </a>
            </sup>
            <span class="c9">
              &nbsp;Perhaps this fall ended his active working life since no
              more references to his working remain. He was always a reader, but
              in his older years often wrote lengthy commentaries on his
              reading.{" "}
            </span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Family;