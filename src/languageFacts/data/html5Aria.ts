/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { IAttributeData } from '../../htmlLanguageTypes';

export const ARIA_ATTRIBUTES: IAttributeData[] = [
  {
    "name": "aria-activedescendant",
    "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.\n"
  },
  {
    "name": "aria-atomic",
    "valueSet": "b",
    "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.\n"
  },
  {
    "name": "aria-autocomplete",
    "valueSet": "autocomplete",
    "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.\n"
  },
  {
    "name": "aria-busy",
    "valueSet": "b",
    "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.\n"
  },
  {
    "name": "aria-checked",
    "valueSet": "tristate",
    "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets. See related aria-pressed and aria-selected.\n"
  },
  {
    "name": "aria-colcount",
    "description": "Defines the total number of columns in a table, grid, or treegrid. See related aria-colindex.\n"
  },
  {
    "name": "aria-colindex",
    "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. See related aria-colcount and aria-colspan.\n"
  },
  {
    "name": "aria-colspan",
    "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-colindex and aria-rowspan.\n"
  },
  {
    "name": "aria-controls",
    "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.\n"
  },
  {
    "name": "aria-current",
    "valueSet": "current",
    "description": "Indicates the element that represents the current item within a container or set of related elements.\n"
  },
  {
    "name": "aria-describedat"
  },
  {
    "name": "aria-describedby",
    "description": "Identifies the element (or elements) that describes the object. See related aria-labelledby.\n"
  },
  {
    "name": "aria-disabled",
    "valueSet": "b",
    "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. See related aria-hidden and aria-readonly.\n"
  },
  {
    "name": "aria-dropeffect",
    "valueSet": "dropeffect",
    "description": "\\[Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target.\n"
  },
  {
    "name": "aria-errormessage",
    "description": "Identifies the element that provides an error message for the object. See related aria-invalid and aria-describedby.\n"
  },
  {
    "name": "aria-expanded",
    "valueSet": "u",
    "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.\n"
  },
  {
    "name": "aria-flowto",
    "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.\n"
  },
  {
    "name": "aria-grabbed",
    "valueSet": "u",
    "description": "\\[Deprecated in ARIA 1.1] Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n"
  },
  {
    "name": "aria-haspopup",
    "valueSet": "b",
    "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.\n"
  },
  {
    "name": "aria-hidden",
    "valueSet": "b",
    "description": "Indicates whether the element is exposed to an accessibility API. See related aria-disabled.\n"
  },
  {
    "name": "aria-invalid",
    "valueSet": "invalid",
    "description": "Indicates the entered value does not conform to the format expected by the application. See related aria-errormessage.\n"
  },
  {
    "name": "aria-kbdshortcuts"
  },
  {
    "name": "aria-label",
    "description": "Defines a string value that labels the current element. See related aria-labelledby.\n"
  },
  {
    "name": "aria-labelledby",
    "description": "Identifies the element (or elements) that labels the current element. See related aria-describedby.\n"
  },
  {
    "name": "aria-level",
    "description": "Defines the hierarchical level of an element within a structure.\n"
  },
  {
    "name": "aria-live",
    "valueSet": "live",
    "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.\n"
  },
  {
    "name": "aria-modal",
    "valueSet": "b",
    "description": "Indicates whether an element is modal when displayed.\n"
  },
  {
    "name": "aria-multiline",
    "valueSet": "b",
    "description": "Indicates whether a text box accepts multiple lines of input or only a single line.\n"
  },
  {
    "name": "aria-multiselectable",
    "valueSet": "b",
    "description": "Indicates that the user may select more than one item from the current selectable descendants.\n"
  },
  {
    "name": "aria-orientation",
    "valueSet": "orientation",
    "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.\n"
  },
  {
    "name": "aria-owns",
    "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related aria-controls.\n"
  },
  {
    "name": "aria-placeholder",
    "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.\n"
  },
  {
    "name": "aria-posinset",
    "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-setsize.\n"
  },
  {
    "name": "aria-pressed",
    "valueSet": "tristate",
    "description": "Indicates the current \"pressed\" state of toggle buttons. See related aria-checked and aria-selected.\n"
  },
  {
    "name": "aria-readonly",
    "valueSet": "b",
    "description": "Indicates that the element is not editable, but is otherwise operable. See related aria-disabled.\n"
  },
  {
    "name": "aria-relevant",
    "valueSet": "relevant",
    "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related aria-atomic.\n"
  },
  {
    "name": "aria-required",
    "valueSet": "b",
    "description": "Indicates that user input is required on the element before a form may be submitted.\n"
  },
  {
    "name": "aria-roledescription",
    "description": "Defines a human-readable, author-localized description for the role of an element.\n"
  },
  {
    "name": "aria-rowcount",
    "description": "Defines the total number of rows in a table, grid, or treegrid. See related aria-rowindex.\n"
  },
  {
    "name": "aria-rowindex",
    "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. See related aria-rowcount and aria-rowspan.\n"
  },
  {
    "name": "aria-rowspan",
    "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-rowindex and aria-colspan.\n"
  },
  {
    "name": "aria-selected",
    "valueSet": "u",
    "description": "Indicates the current \"selected\" state of various widgets. See related aria-checked and aria-pressed.\n"
  },
  {
    "name": "aria-setsize",
    "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-posinset.\n"
  },
  {
    "name": "aria-sort",
    "valueSet": "sort",
    "description": "Indicates if items in a table or grid are sorted in ascending or descending order.\n"
  },
  {
    "name": "aria-valuemax",
    "description": "Defines the maximum allowed value for a range widget.\n"
  },
  {
    "name": "aria-valuemin",
    "description": "Defines the minimum allowed value for a range widget.\n"
  },
  {
    "name": "aria-valuenow",
    "description": "Defines the current value for a range widget. See related aria-valuetext.\n"
  },
  {
    "name": "aria-valuetext",
    "description": "Defines the human readable text alternative of aria-valuenow for a range widget.\n"
  },
  {
    "name": "aria-details",
    "description": "Identifies the element that provides a detailed, extended description for the object. See related aria-describedby.\n"
  },
  {
    "name": "aria-keyshortcuts",
    "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.\n"
  }
];