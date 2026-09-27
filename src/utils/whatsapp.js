import { SITE } from '../config/site.js';

export const WHATSAPP_URL = SITE.whatsapp;

export const whatsappUrl = (message = '') => {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
};

export const RESERVATION_PROMPT =
  "Hi, I'd like to reserve a table at Dr. Sheesha.";

export const reservationMessage = ({ name, phone, date, time, guests, notes }) => {
  const lines = [
    "Hi, I'd like to reserve a table at Dr. Sheesha.",
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
  ];
  if (notes?.trim()) lines.push(`Notes: ${notes.trim()}`);
  return lines.join('\n');
};

export const eventEnquiryMessage = ({
  name,
  contact,
  eventType,
  date,
  guests,
  message,
}) => {
  const lines = [
    "Hi, I'd like to enquire about a private event at Dr. Sheesha.",
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Event Type: ${eventType}`,
    `Date: ${date}`,
    `Guests: ${guests}`,
  ];
  if (message?.trim()) lines.push(`Message: ${message.trim()}`);
  return lines.join('\n');
};

export const openWhatsApp = (message = '') => {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
};
