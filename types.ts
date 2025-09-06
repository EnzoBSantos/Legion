import type React from 'react';

export enum ScreenType {
  GENDER_SELECTION,
  SINGLE_CHOICE,
  SINGLE_CHOICE_RADIO,
  MULTIPLE_CHOICE,
  INFO,
  INFO_WITH_IMAGE,
  COMPARISON_CHOICE,
  LOADING,
  RESULTS,
  OFFER_PAGE
}

export interface ScreenOption {
  text: string;
  value: string;
  emoji?: string;
}

export interface ComparisonOption {
    title: string;
    image: string;
    subtitle: string;
    value: string;
}

export interface ScreenData {
  type: ScreenType;
  id: string;
  title: string | React.ReactNode;
  subtitle?: string;
  options?: ScreenOption[];
  comparisonOptions?: ComparisonOption[];
  buttonText?: string;
  infoContent?: React.ReactNode;
  imageUrl?: string;
  source?: string;
  notes?: string[];
  layout?: 'list' | 'grid';
}

export type Answers = Record<string, any>;