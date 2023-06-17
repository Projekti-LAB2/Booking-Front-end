import i18n  from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'al', // Set the default language
  fallbackLng: 'al', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
  resources: {
    al: {
        translation: {
          shqip: 'Shqip',
          english: 'English',
          RoundTrip:'Vajtje-Ardhje',
          Oneway:'Njedrejtimshe',
          Multicity:'Shetitje',
          From:'Prej',
          To:'Në',
          Option1:'Opsioni 1',
          Option2:'Opsioni 2',
          Option3:'Opsioni 3',
          Departing:'Nisja',
          Returning:'Kthimi',
          Search:'Kerko Bileten',
          Trending:'DESTINACIONET TREND 2023',
          Most:'Zgjedhjet më të njohura për udhëtarët nga Kosova',
          Traveldes:'Travel.com është pjesë e Booking Holdings Inc., lider botëror në udhëtimet në internet dhe shërbime të ngjashme'
        },
      },
    en: {
      translation: {
        shqip: 'Language',
        english: 'English',
        RoundTrip:'Round Trip',
        Oneway:'One way',
        Multicity:'Multi City',
        From:'From',
        To:'To',
        Option1:'Option 1',
        Option2:'Option 2',
        Option3:'Option 3',
        Departing:'Departing',
        Returning:'Returning',
        Search:'Search For Tickets',
        Trending:'TRENDING DESTINATIONS 2023',
        Most:'Most popular choices for travelers from Kosovo',
        Traveldes:'Travel.com is part of Booking Holdings Inc., the world leader in online travel and related service'
      },
    },
  },
});

export default i18n;