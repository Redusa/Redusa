import isString from 'lodash/isString';

export function isBot(value) {
  if (isString(value)) {
    return list.includes(value.toUpperCase());
  }
}

export const list = [
  '__BOT__',
  '_DEFINITION_BOT_',
  '_FALLACYBOT_',
  '_RITA_',
  'A858DE45F56D9BC9',
  'A_RANDOM_GIF',
  'AABOT',
  'ADHDBOT',
  'ALBUMBOT',
  'ALLINONEBOT',
  'ALTCODEBOT',
  'ALTCOINTIP',
  'ANNOYING_YES_BOT',
  'ANTIRACISM_BOT',
  'APICONTRAPTION',
  'ASMRSPAMBOT',
  'ASSHATBOT',
  'ASTRO-BOT',
  'ATHEISMMODBOT',
  'AUTO-DOGE',
  'AUTOINSULT',
  'AUTOMODERATOR',
  'AUTOTLDR',
  'AUTOURBANBOT',
  'AUTOWIKIBOT',
  'AVR_MODBOT',
  'BAD_BALL_BAN_BOT',
  'BADLINGUISTICSBOT',
  'BAN_PRUNER',
  'BANISHEDBOT',
  'BASEBALL_GIF_BOT',
  'BEECOINTIPBOT',
  'BEETUSBOT',
  'BELITIPBOT',
  'BENSONTHEBOT',
  'BIBLE_VERSES_BOT',
  'BITCOINPARTYBOT',
  'BITCOINTIP',
  'BITOFNEWSBOT',
  'BLACKJACKBOT',
  'BLOCKCHAINBOT',
  'BOCKETYBOT',
  'BRIGADE_BOT',
  'BRMT_BOT',
  'BRONZE-BOT',
  'C5BOT',
  'C5BOT',
  'CAH_BLACK_BOT',
  'CAKEDAY-BOT',
  'CALLFLOODBOT',
  'CALLIBOT',
  'CALVINBOT',
  'CANADA_GOOSE_TIP_BOT',
  'CAPTIONBOT',
  'CARTERDUGSUBLINKBOT',
  'CASUALMETRICBOT',
  'CHANGETIP',
  'CHART_BOT',
  'CHEESECOINTIPBOT',
  'CHEMISTRY_BOT',
  'CHRISTIANITYBOT',
  'CHROMABOT',
  'CLASSYBOT',
  'CLOSING_PARENTHESIS',
  'CODEBREAKERBREAKER',
  'COINFLIPBOT',
  'COINYETIPPER',
  'COLORCODEBOT',
  'COMMENT_CODEBREAKER',
  'COMMENT_COPIER_BOT',
  'COMPILEBOT',
  'COMPLIMENTINGBOT',
  'CONSPIROBOT',
  'CPTMODBOT',
  'CREDDITBOT',
  'CREEPIERSMILEBOT',
  'CREEPIERSMILEBOT',
  'CREEPYSMILEBOT',
  'CRIS9696',
  'CRUISE_BOT',
  'CUTEBOT6969',
  'D3POSTERBOT',
  'DDBOTINDIA',
  'DEFINE_BOT',
  'DEFINITELYBOT',
  'DELTABOT',
  'DEMOBILIZER',
  'DGCTIPBOT',
  'DICTIONARY__BOT',
  'DIDSOMEONESAYBOOBS',
  'DIGITIPBOT',
  'DISAPPROVALBOT',
  'DNOTESTIP',
  'DOGELOTTERYMODBOT',
  'DOGETIPBOT',
  'DOGETIPSTATSBOT',
  'DOGEWORDCLOUDBOT',
  'DOTACASTINGBOT',
  'DOWNTOTES_PLZ',
  'DOWNVOTESMCGOATS',
  'DRKTIPBOT',
  'DROPBOX_BOT',
  'EARTHTIPBOT',
  'EDMPROBOT',
  'ELMATADERO_BOT',
  'ELWH392',
  'EMMABOT',
  'EPIC_FACE_BOT',
  'ESCAPISTVIDEOBOT',
  'EXMOBOT',
  'EXPIRED_LINK_BOT',
  'EXPLANATIONBOT',
  'FA_MIRROR',
  'FACT_CHECK_BOT',
  'FAKETIPBOT',
  'FEDORA_TIP_BOT',
  'FEDORATIPAUTOBOT',
  'FEDORATIPS',
  'FELINEFACTS',
  'FIXES_GRAMMERNAZI_',
  'FLAPPYTIP',
  'FLIPS_TITLE',
  'FOREIGNEDUCATIONBOT',
  'FRIENDLYCAMELCASEBOT',
  'FRIENDSAFARIBOT',
  'FRONTPAGEWATCH',
  'FROWN_BOT',
  'FRYTIPBOT',
  'FSCTIPBOT',
  'FTFY_CAT',
  'FTFY_CAT6',
  'GABENCOINTIPBOT',
  'GABENIZER-BOT',
  'GABENTIPBOT',
  'GAMEDEALSBOT',
  'GATHERER_BOT',
  'GATSBOT',
  'GEEKWHACKBOT',
  'GFY_BOT',
  'GFYCAT-BOT-SUCKSDICK',
  'GIANTBOMBBOT',
  'GIFASHTML5',
  'GIFSTER_BOT',
  'GIVES_YOU_BOOBIES',
  'GIVESAFUCKBOT',
  'GOCOUGS_BOT',
  'GODWIN_FINDER',
  'GOLFERBOT',
  'GONEWILDRESEARCHER',
  'GOOGLEPLUSBOT',
  'GOTCRYPTO',
  'GRACEFULCHARITYBOT',
  'GRACEFULCLARITYBOT',
  'GRAMMERNAZI_',
  'GREASYBACON',
  'GREGBOT',
  'GROOMPBOT',
  'GRUMBLER_BOT',
  'GUNNERS_GIF_BOT',
  'GUNNERSGIFSBOT',
  'GUNNITBOT',
  'HAIKU_ROBOT',
  'HANDY_RELATED_SUB',
  'HAVOC_BOT',
  'HCE_REPLACEMENT_BOT',
  'HEARING-AID_BOT',
  'HEARING_AID_BOT',
  'HEARINGAID_BOT',
  'HIGHRESIMAGEFINDER',
  'HIT_BOT',
  'HOCKEY_GIF_BOT',
  'HOCKEYGT_BOT',
  'HOWISTHISBESTOF_BOT',
  'HOWSTAT',
  'HSCARD_DISPLAY_BOT',
  'HWSBOT',
  'I_BITCOIN_CATS',
  'I_SAY_NO_',
  'IAGREEBOT',
  'ICOULDNTCARELESSBOT',
  'IMGUR_REHOSTING',
  'IMGURHOSTBOT',
  'IMGURTRANSCRIBER',
  'IMIRROR_BOT',
  'INSANE_PHOTO_BOT',
  'IS_IT_SOLVED',
  'ISITDOWNBOT',
  'ISITUPBOT',
  'JERKBOT-3HUNNA',
  'JIFFYBOT',
  'JOTBOT',
  'JUMPTOBOT',
  'KARMACONSPIRACY_BOT',
  'KEYSTEAL_BOT',
  'KITTEHCOINTIPBOT',
  'KSPORTBOT',
  'LAST_CAKEDAY_BOT',
  'LAZYLINKERBOT',
  'LINK_CORRECTION_BOT',
  'LINK_DEMOBILIZER',
  'LINK_RECTIFIER_BOT',
  'LINKEDCOMMENTBOT',
  'LINKFIXERBOT1',
  'LINKFIXERBOT2',
  'LINKFIXERBOT3',
  'LINKFIXERBOTSNR',
  'LOCATIONBOT',
  'LOSER_DETECTOR_BOT',
  'LUCKOFTHESHIBE',
  'MAGNIFIER_BOT',
  'MAKES_SMALL_TEXT_BOT',
  'MAKESTEXTSMALL',
  'MALEN-SHUTUP-BOT',
  'MATTHEWROBO',
  'MAXIMAGEBOT',
  'MEME_TRANSCRIBER',
  'MEMEDAD-TRANSCRIBER',
  'META_BOT',
  'METATASTICBOT',
  'METRIC_SYSTEM_BOT',
  'METRICPLEASEBOT',
  'MISCONCEPTION_FIXER',
  'MMA_GIF_BOT',
  'MODERATOR-BOT',
  'MONTREALBOT',
  'MOVIEGUIDE',
  'MULTIFUNCTIONBOT',
  'MUMEBOT',
  'NASCARTHREADBOT',
  'NAZEEM_BOT',
  'NBA_GIF_BOT',
  'NEW_EDEN_NEWS_BOT',
  'NEW_SMALL_TEXT_BOT',
  'NFLVIDEOBOT',
  'NHL_GIF_BOT',
  'NIDALEE_BOT',
  'NIGHTMIRRORMOON',
  'NOBODYDOESTHIS',
  'NOSLEEPAUTOMOD',
  'NOSOBSTORYBOT2',
  'NOT_ALOT_BOT',
  'NOTOVERTICALVIDEO',
  'NOTREDDITENOUGH',
  'NSLBOT',
  'NYANTIP',
  'OKC_RATING_BOT',
  'PANDATIPBOT',
  'PANDATIPS',
  'PHOENIXBOT',
  'PHOTO_OF_CAPTAIN_RON',
  'PIGLATINSYOURCOMMENT',
  'PJRP_BOT',
  'PLAYLISTERBOT',
  'PLAYSTORELINKS_BOT',
  'PLEASERESPECTTABLES',
  'PLOUNGEMAFIAVOTEBOT',
  'POKEMONFLAIRBOT',
  'POLITEBOT',
  'POLITICBOT',
  'PONYTIPBOT',
  'PORNOVERLORD',
  'PORYGON-BOT',
  'POTDEALER',
  'PRESIDENTOBAMA___',
  'PROSELYTIZERBOT',
  'PROVIDES-ID',
  'PUNKNROLLBOT',
  'QUICHE-BOT',
  'QZNC_BOT',
  'R_PICTUREGAME',
  'RADDIT-BOT',
  'RANDNUMBOT',
  'RANDOM-COMPLIMENTBOT',
  'RANDOMTRIVIABOT',
  'RANGERS_BOT',
  'RARCHIVES',
  'READDIT_BOT',
  'READS_SMALL_TEXT_BOT',
  'READSMALLTEXTBOT',
  'REALTECHPOSTBOT',
  'REDDCOINGOLDBOT',
  'REDDITBOTS',
  'REDDITREVIEWBOT',
  'REDDITREVIEWBOT',
  'REDDTIPBOT',
  'REDUSABOT',
  'RELEVANT_NEWS_BOT',
  'RELEVANTXKCD-BOT',
  'REQUEST_BOT',
  'REQUIREMENTSBOT',
  'RFOOTBALLBOT',
  'RFREEBANDZBOT',
  'RHIEVER-BOT',
  'RIGHTSBOT',
  'RISKYCLICKBOT',
  'RNFL_ROBOT',
  'ROGER_BOT',
  'RSGSPOLICE',
  'RSS_FEED',
  'RUBYCOINTIPBOT',
  'RULE_BOT',
  'RUSETIPBOT',
  'SAKURAIBOT',
  'SAKURAIBOT_TEST',
  'SATOSHITIPBOT',
  'SENTIMENTVIEWBOT',
  'SERENDIPITYBOT',
  'SERIAL_JOKE_KILLER',
  'SHADOWBANBOT',
  'SHADOWBANNEDBOT',
  'SHIBEBOT',
  'SHILLFORMONSANTO',
  'SHINY-BOT',
  'SHITTYGANDHIQUOTES',
  'SHITTYIMAGEBOT',
  'SKETCHNOTSKIT',
  'SLAPBOT',
  'SLICKWOM-BOT',
  'SMALLTEXTREADER',
  'SMCTIPBOT',
  'SMILE_BOT',
  'SNAPSHOT_BOT',
  'SOCCER_GIF_BOT',
  'SOFTWARESWAP_BOT',
  'SOMALIA_BOT',
  'SOME_BOT',
  'SPORTS_GIF_BOT',
  'SPURSGIFS_XPOSTERBOT',
  'SRD_NOTIFIER',
  'SRS_HISTORY_BOT',
  'SRSCREENSHOT',
  'STACKBOT',
  'STARBOUNDBOT',
  'STATS-BOT',
  'STEAM_BOT',
  'STENCILTEMPLATEBOT',
  'STREETFIGHTMIRRORBOT',
  'SUBTEXT-BOT',
  'SUCHMODBOT',
  'SURVEYOFREDDITBOT',
  'SWTOR_HELPER_BOT',
  'SYNONYM_FLASH',
  'TABLEDRESSER',
  'TECHOBOT',
  'TENNIS_GIF_BOT',
  'TEST_BOT0X00',
  'TEXT_READER_BOT',
  'THESWEDISHBOT',
  'TIPMOONBOT',
  'TIPMOONBOT1',
  'TIPMOONBOT2',
  'TITSORGTFO_BOT',
  'TITTIETIPBOT',
  'TOP_COMMENT_OF_YORE',
  'TOPCOIN_TIP',
  'TOPREDDITBOT',
  'TOTES_META_BOT',
  'TTUMBLRBOTS',
  'TWEETPOSTER',
  'TWITCH2YOUTUBE',
  'UNHANDY_RELATED_SUB',
  'UNITCONVERT',
  'UNOBTANIUMTIPBOT',
  'URBANDICBOT',
  'USELESSARITHMETICBOT',
  'USELESSCONVERSIONBOT',
  'VALKYRIBOT',
  'VERSEBOT',
  'VERTCOINBOT',
  'VERTCOINTIPBOT',
  'VIDEOLINKBOT',
  'VIDEOPOKERBOT',
  'VSAUCEBOT',
  'WEAPPRECIATEYOU',
  'WEBSITE_MIRROR_BOT',
  'WEEABOT',
  'WHERES_THE_KARMA_BOT',
  'WHOWOULDWINBOT',
  'WIKI_BOT',
  'WIKI_FIRSTPARA_BOT',
  'WIKIPEDIACITATIONBOT',
  'WINK-BOT',
  'WOOSHBOT',
  'WORDCLOUDBOT2',
  'WRITINGPROMPTSBOT',
  'WWE_NETWORK_BOT',
  'X_BOT',
  'XKCD_BOT',
  'XKCD_NUMBER_BOT',
  'XKCD_NUMBER_BOT',
  'XKCD_NUMBER_BOT',
  'XKCD_TRANSCRIBER',
  'XKCDCOMIC_BOT',
  'YES_IT_IS_WEIRD',
  'YOUREBOT',
  'YT_BOT',
];