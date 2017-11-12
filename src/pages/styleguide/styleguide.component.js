import React, { Component } from 'react';
import '../../templates/responsivePage.component.css';
import './styleguide.component.css';
import { DEFAULT_IMAGE, DEFAULT_VERTICAL_IMAGE } from '../../constants/constants.js';
import StyleGuideItem from './styleguideitem.component.js';

// Components
import ResponsiveImage from '../../atoms/responsiveImage/responsiveImage.component.js';
import ResponsiveImageRow from '../../molecules/responsiveImageRow/responsiveImageRow.component.js';
import SiteTitle from '../../atoms/siteTitle/siteTitle.component.js';
import Link from '../../atoms/link/link.component.js';
import LinkGroup from '../../molecules/links/linkGroup.component.js';
import TextDivider from '../../atoms/divider/textDivider.component.js';
import DropdownMenu from '../../molecules/dropdownMenu/dropdownMenu.component.js';
import Header from '../../organisms/header/header.component.js';
import Gallery from '../../molecules/gallery/gallery.component.js';
import ButtonRoundText from '../../atoms/button/roundTextButton.component.js';
import GalleryModal from '../../molecules/gallery/galleryModal.component.js';
import InputBox from '../../atoms/input/inputBox.component.js';
import TextArea from '../../atoms/input/textArea.component.js';
import ContactForm from '../../organisms/forms/contactForm.component.js';

class StyleGuide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      galleryModalIsOpen: false,
      inputBoxValue: "",
      textAreaValue: "",
      formInputs: {}
    };
  };

  handleClick = () => {
    alert("hey!");
  };

  handleModalToggle = () => {
    this.setState( prevState => ({ galleryModalIsOpen: !prevState.galleryModalIsOpen }));
  };

  onInputBoxChange = (name, value) => {
    console.log("input", name, value);
    this.setState({ inputBoxValue: value });
  };

  onTextAreaChange = (name, value) => {
    this.setState({ textAreaValue: value });
  };

  handleFormSubmit = (value) => {
    this.setState({ formInputs: value });
  };

  render() {
    return (
      <div>
        <span>Style Guide 	&hearts;</span>

        {/* RESPONSIVE IMAGE */}
        <StyleGuideItem
          title="Responsive Image"
          type="atom"
          itemProps={[
            { name: "imageUrl", isRequired: "required", description: "Image to be displayed."}
          ]}>
          { ResponsiveImage({ imageUrl: DEFAULT_IMAGE }) }
        </StyleGuideItem>

        {/* RESPONSIVE IMAGE ROW */}
        <StyleGuideItem
          title="Responsive Image Row (Cover Image if Single)"
          type="molecule"
          itemProps={[
            { name: "imageUrls", isRequired: "required", description: "Array of images to be displayed. Will be displayed as cover image if only one image."}
          ]}>
          <ResponsiveImageRow imageUrls={ [ DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE ] } />
        </StyleGuideItem>

        {/* SITE TITLE */}
        <StyleGuideItem
          title="Site Title"
          type="atom"
          itemProps={[
            { name: "text", isRequired: "required", description: "Title text to display."}
          ]}>
          { SiteTitle({ text: "Kim Greenough" }) }
        </StyleGuideItem>

        {/* LINK */}
        <StyleGuideItem
          title="Link"
          type="atom"
          itemProps={[
            { name: "url", isRequired: "required", description: "Internal react-router Route to navigate to."},
            { name: "text", isRequired: "required", description: "Link text to display. "}
          ]}>
          { Link({ url: "/about", text: "Internal Link Example" }) }
          <br />
          { Link({ url: "http://www.kimbyarting.com/", text: "External Link Example" }) }
        </StyleGuideItem>

        {/* LINK GROUP */}
        <StyleGuideItem
          title="Link Group"
          type="molecule"
          itemProps={[
            { name: "linkData", isRequired: "required", description: "Array of objects each containing 'url' and 'text' for each link."},
            { name: "orientation", isRequired: "optional", description: "Orientation to render: 'vertical' or 'horizontal'. Horizontal by default."}
          ]}>
          { LinkGroup({ linkData: [
            { url: "/about", text: "About" },
            { url: "/about", text: "Also About" },
            { url: "http://www.kimbyarting.com/", text: "Commissions" },
            { url: "https://www.facebook.com/", text: "Facebook" }
          ]})}

          { LinkGroup({
            linkData: [
              { url: "/about", text: "About" },
              { url: "/about", text: "Also About" },
              { url: "http://www.kimbyarting.com/", text: "Commissions" },
              { url: "https://www.facebook.com/", text: "Facebook" }
            ],
            orientation: "vertical"
          })}
        </StyleGuideItem>

        {/* DIVIDER */}
        <StyleGuideItem
          title="Text Divider"
          type="atom">
          <p>This text is { TextDivider() } divided </p>
        </StyleGuideItem>

        {/* MENU */}
        <StyleGuideItem
          title="DropdownMenu"
          type="molecule">
          <DropdownMenu linkData={[
            { url: "/about", text: "About" },
            { url: "/about", text: "Also About" },
            { url: "http://www.kimbyarting.com/", text: "Commissions" },
            { url: "https://www.facebook.com/", text: "Facebook" }
          ]} />
        </StyleGuideItem>

        {/* HEADER */}
        <StyleGuideItem
          title="Header"
          type="organism">
          { Header() }
        </StyleGuideItem>

        {/* GALLERY */}
        <StyleGuideItem
          title="Gallery"
          type="molecule">
          <Gallery imageRowUrls={[
            [DEFAULT_IMAGE],
            [DEFAULT_IMAGE, DEFAULT_VERTICAL_IMAGE, DEFAULT_IMAGE],
            [DEFAULT_IMAGE, DEFAULT_IMAGE],
            [DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE]
          ]} />
        </StyleGuideItem>

        {/* BUTTON - ROUND W/ TEXT */}
        <StyleGuideItem
          title="Button - Round with Text"
          type="atom">
          <ButtonRoundText text="PREVIOUS" onClick={ this.handleClick }/>
        </StyleGuideItem>

        {/* GALLERY MODAL */}
        <StyleGuideItem
          title="Gallery Modal"
          type="Molecule">
          <ButtonRoundText text="OPEN MODAL" onClick={ this.handleModalToggle }/>
          <GalleryModal imageUrls={[ DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_VERTICAL_IMAGE ]} activeIndex={1} isOpen={ this.state.galleryModalIsOpen } onClose={ this.handleModalToggle }/>
        </StyleGuideItem>

        {/* INPUT BOX */}
        <StyleGuideItem
          title="Input Box"
          type="Atom">
          <InputBox
            label="First"
            type="text"
            name="First"
            onChange={ this.onInputBoxChange }
            error={ false }
          />
          <p>{ this.state.inputBoxValue }</p>
          <InputBox
            label="Last"
            type="text"
            name="Last"
            onChange={ this.onInputBoxChange }
            error={ "Please provide a valid last name." }
          />
        </StyleGuideItem>

        {/* TextArea */}
        <StyleGuideItem
          title="Text Area"
          type="Atom">
          <TextArea
            label="Message"
            name="Example"
            onChange={ this.onTextAreaChange }
            error={ false }
          />
          <p>{ this.state.textAreaValue }</p>
        </StyleGuideItem>

        {/* ContactForm */}
        <StyleGuideItem
          title="Text Area"
          type="Atom">
          <ContactForm onSubmit={ this.handleFormSubmit }/>
          { this.state.formInputs.first }
        </StyleGuideItem>

      </div>
    );
  };
}

export default StyleGuide;
