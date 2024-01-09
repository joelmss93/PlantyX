import { bannerENUSTranslations } from '../components/Banner/translations/enus'
import { bannerPTBRTranslations } from '../components/Banner/translations/ptbr'
import { bestSellersENUSTranslations } from '../components/BestSellers/translations/enus'
import { bestSellersPTBRSTranslations } from '../components/BestSellers/translations/ptbr'
import { footerENUSTranslations } from '../components/Footer/translations/enus'
import { footerPTBRTranslations } from '../components/Footer/translations/ptbr'
import { userConfigsENUSTranslations } from '../components/Header/UserConfigs/translations/enus'
import { userConfigsPTBRTranslations } from '../components/Header/UserConfigs/translations/ptbr'
import { HeaderENUSTranslations } from '../components/Header/translations/enus'
import { HeaderPTBRTranslations } from '../components/Header/translations/ptbr'

export const enUSTranslations = {
  ...HeaderENUSTranslations,
  ...userConfigsENUSTranslations,
  ...footerENUSTranslations,
  ...bannerENUSTranslations,
  ...bestSellersENUSTranslations,
}

export const ptBRTranslations = {
  ...HeaderPTBRTranslations,
  ...userConfigsPTBRTranslations,
  ...footerPTBRTranslations,
  ...bannerPTBRTranslations,
  ...bestSellersPTBRSTranslations,
}

export const resources: { [language: string]: any } = {
  'en-US': {
    name: 'English',
    translation: enUSTranslations,
  },
  'pt-BR': {
    name: 'Portuguese - Brazil',
    translation: ptBRTranslations,
  },
}
