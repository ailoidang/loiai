
import React from 'react';
import { StyleType, Quality } from './types';

export const CINEMATIC_ANGLES = [
  "Centered medium shot, professional head-to-waist framing, face fully visible and sharp",
  "Close-up portrait focusing on high-detail facial features and eyes, no head cropping",
  "Three-quarter cinematic view, elegant posture, subject fully contained within frame",
  "Eye-level perspective, symmetrical composition, professional studio lighting on face",
  "Golden ratio composition, subject centered, clear facial identity and detailed clothing",
  "Full upper body portrait, subject perfectly framed against artistic background",
  "Soft profile turned 15 degrees to camera, maintaining full facial identity and sharp eyes"
];

export const STYLE_PROMPTS = {
  [StyleType.TET_MAI]: `Ultra-realistic portrait, luxury Vietnamese Tet atmosphere, Southern Vietnam apricot blossom garden (vườn mai vàng), elegant traditional Ao Dai, cinematic lighting, soft golden ambient light, high-detail skin texture, face identity preserved, same facial structure, photorealistic professional photography`,
  
  [StyleType.TET_DAO]: `Ultra-realistic portrait, luxury Vietnamese Tet atmosphere, Northern Vietnam peach blossom garden (vườn đào), elegant traditional Ao Dai, cinematic lighting, soft spring mist, premium fashion photography, high-detail skin texture, photorealistic, face identity preserved`,
  
  [StyleType.TET_LONG_DEN]: `Ultra-realistic portrait, luxury Vietnamese Tet atmosphere, traditional lantern street, vibrant red lanterns background, modern Ao Dai, glowing ambient light, cinematic festival mood, photorealistic face identity preserved`,
  
  [StyleType.TET_NGUYEN_HUE]: `Ultra-realistic portrait, luxury Vietnamese Tet atmosphere, Saigon Nguyen Hue walking street, spring fashion, professional commercial photography, high clarity, face identity preserved`,

  [StyleType.PROFILE_VEST]: `Ultra-realistic professional profile portrait, luxury dark blue gradient background, premium tailored vest and suit, sophisticated executive look, studio rim lighting, sharp focus, face identity preserved, photorealistic`,

  [StyleType.BUSINESS]: `Ultra-realistic corporate portrait, luxury office background, executive look, suit, blazer, studio lighting, sharp focus, professional headshot, photorealistic, face identity preserved`,
  
  [StyleType.FASHION]: `Ultra-realistic fashion portrait, high-end fashion editorial look, artistic lighting, Vogue magazine style, dramatic shadows, premium photography, hyperrealistic skin, face identity preserved`,

  [StyleType.GALA]: `8K Ultra-realistic luxury gala portrait. Wearing a breathtaking high-end evening gown made of premium silk, lace and shimmering sequins. Red carpet atmosphere with soft bokeh lights. Glamorous and elegant posture, subject centered, face perfectly visible, professional ballroom framing, exquisite fabric and skin texture, photorealistic cinematic lighting.`,

  [StyleType.CLASSIC_LOTUS]: `8K hyper-realistic fine art portrait of an East Asian woman around 35 years old, maintaining the exact facial features from reference. Classical Vietnamese aesthetic. Wearing a modern-traditional "ao yem" made of thin light blue silk with silver sheen, exquisite white lotus embroidery. Bare shoulders, flowing silk sleeves, feminine and pure. She is sitting slightly tilted to the left, left hand touching an ancient ceramic vase, right hand holding a white lotus flower, head slightly tilted, loose hair with strands flying. Gentle expression, soft smile - radiating peace and grace. Background: deep dark brown, large ceramic vase with white lotuses and large leaves for depth. Studio lighting: rim light creating a halo on hair and shoulders, highlighting clear skin. Framing: 3/4 view, eye-level, no cropping of head or shoulders. Full frame composition.`
};

export const QUALITY_MAPPING = {
  [Quality.FOUR_K]: `ultra detailed, 4k resolution, sharp focus, professional commercial photography`,
  [Quality.EIGHT_K]: `ultimate quality, 8k resolution, hyper sharp, extreme realism, cinematic masterwork, ultra high definition`,
  [Quality.SIXTEEN_K]: `extreme 16k resolution masterpiece, microscopic clarity, legendary photography quality, flawless cinematic realism`
};

export const Icons = {
  Upload: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  Refresh: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Eye: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  Key: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
};
