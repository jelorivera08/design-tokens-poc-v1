export interface Root {
  global: Global
  $themes: any[]
}

export interface Global {
  "2": N2
  "4": N4
  "8": N8
  "10": N10
  "12": N12
  "16": N16
  "24": N24
  "32": N32
  blue_base: BlueBase
  blue_1: Blue1
  blue_2: Blue2
  blue_3: Blue3
  blue_4: Blue4
  blue_5: Blue5
  blue_6: Blue6
  grey_base: GreyBase
  grey_1: Grey1
  grey_2: Grey2
  grey_3: Grey3
  grey_4: Grey4
  grey_5: Grey5
  grey_6: Grey6
  white_base: WhiteBase
  black: Black
  Background: Background
  Semantic: Semantic
  Channel: Channel
  "Special use": SpecialUse
  "Elevation 1": Elevation1
  "Elevation 2": Elevation2
  "Elevation 3": Elevation3
  "Elevation 4": Elevation4
  Tab: Tab
  fontFamilies: FontFamilies
  lineHeights: LineHeights
  fontWeights: FontWeights
  fontSize: FontSize
  letterSpacing: LetterSpacing
  paragraphSpacing: ParagraphSpacing
  H1: H1
  H2: H2
  "H2 Display": H2Display
  H3: H3
  H4: H4
  Subtitle: Subtitle
  "Body large": BodyLarge
  Body: Body
  "Body Bold": BodyBold
  caption: Caption
  "caption bold": CaptionBold
  code: Code
  "Recipient UI": RecipientUi
  textCase: TextCase
  textDecoration: TextDecoration
  Small: Small
  xLarge: XLarge
  Background_default: BackgroundDefault
  "Enable-Text": EnableText
  xsmall: Xsmall
  None: None3
  Default: Default
}

export interface N2 {
  value: string
  type: string
}

export interface N4 {
  value: string
  type: string
}

export interface N8 {
  value: string
  type: string
}

export interface N10 {
  value: string
  type: string
}

export interface N12 {
  value: string
  type: string
}

export interface N16 {
  value: string
  type: string
}

export interface N24 {
  value: string
  type: string
}

export interface N32 {
  value: string
  type: string
}

export interface BlueBase {
  value: string
  type: string
  description: string
}

export interface Blue1 {
  value: string
  type: string
  description: string
}

export interface Blue2 {
  value: string
  type: string
  description: string
}

export interface Blue3 {
  value: string
  type: string
  description: string
}

export interface Blue4 {
  value: string
  type: string
  description: string
}

export interface Blue5 {
  value: string
  type: string
  description: string
}

export interface Blue6 {
  value: string
  type: string
  description: string
}

export interface GreyBase {
  value: string
  type: string
  description: string
}

export interface Grey1 {
  value: string
  type: string
  description: string
}

export interface Grey2 {
  value: string
  type: string
  description: string
}

export interface Grey3 {
  value: string
  type: string
  description: string
}

export interface Grey4 {
  value: string
  type: string
  description: string
}

export interface Grey5 {
  value: string
  type: string
  description: string
}

export interface Grey6 {
  value: string
  type: string
  description: string
}

export interface WhiteBase {
  value: string
  type: string
  description: string
}

export interface Black {
  value: string
  type: string
}

export interface Background {
  background_1: Background1
  background_2: Background2
  background_3: Background3
  "Conversation chat": ConversationChat
  "Sign up & Log in": SignUpLogIn
  white: White
}

export interface Background1 {
  value: string
  type: string
  description: string
}

export interface Background2 {
  value: string
  type: string
  description: string
}

export interface Background3 {
  value: string
  type: string
  description: string
}

export interface ConversationChat {
  value: string
  type: string
  description: string
}

export interface SignUpLogIn {
  value: string
  type: string
  description: string
}

export interface White {
  value: string
  type: string
}

export interface Semantic {
  sucess_base: SucessBase
  success_1: Success1
  success_2: Success2
  error_base: ErrorBase
  error_1: Error1
  error_2: Error2
  warning_base: WarningBase
  warning_1: Warning1
  warning_2: Warning2
  white: White2
  black: Black2
}

export interface SucessBase {
  value: string
  type: string
  description: string
}

export interface Success1 {
  value: string
  type: string
  description: string
}

export interface Success2 {
  value: string
  type: string
  description: string
}

export interface ErrorBase {
  value: string
  type: string
  description: string
}

export interface Error1 {
  value: string
  type: string
  description: string
}

export interface Error2 {
  value: string
  type: string
  description: string
}

export interface WarningBase {
  value: string
  type: string
  description: string
}

export interface Warning1 {
  value: string
  type: string
  description: string
}

export interface Warning2 {
  value: string
  type: string
  description: string
}

export interface White2 {
  value: string
  type: string
}

export interface Black2 {
  value: string
  type: string
}

export interface Channel {
  email_base: EmailBase
  email_1: Email1
  email_2: Email2
  sms_base: SmsBase
  sms_1: Sms1
  sms_2: Sms2
  web_base: WebBase
  web_1: Web1
  web_2: Web2
}

export interface EmailBase {
  value: string
  type: string
  description: string
}

export interface Email1 {
  value: string
  type: string
  description: string
}

export interface Email2 {
  value: string
  type: string
  description: string
}

export interface SmsBase {
  value: string
  type: string
  description: string
}

export interface Sms1 {
  value: string
  type: string
  description: string
}

export interface Sms2 {
  value: string
  type: string
  description: string
}

export interface WebBase {
  value: string
  type: string
  description: string
}

export interface Web1 {
  value: string
  type: string
}

export interface Web2 {
  value: string
  type: string
}

export interface SpecialUse {
  letter_badge_1: LetterBadge1
  letter_badge_2: LetterBadge2
  letter_badge_3: LetterBadge3
  letter_badge_4: LetterBadge4
  letter_badge_5: LetterBadge5
  letter_badge_6: LetterBadge6
  chip_variable: ChipVariable
  chip_adhoc: ChipAdhoc
  chip_adhoc_hover: ChipAdhocHover
  chip_error_hover: ChipErrorHover
  free: Free
  beta: Beta
  paid: Paid
}

export interface LetterBadge1 {
  value: string
  type: string
  description: string
}

export interface LetterBadge2 {
  value: string
  type: string
  description: string
}

export interface LetterBadge3 {
  value: string
  type: string
  description: string
}

export interface LetterBadge4 {
  value: string
  type: string
  description: string
}

export interface LetterBadge5 {
  value: string
  type: string
  description: string
}

export interface LetterBadge6 {
  value: string
  type: string
  description: string
}

export interface ChipVariable {
  value: string
  type: string
  description: string
}

export interface ChipAdhoc {
  value: string
  type: string
  description: string
}

export interface ChipAdhocHover {
  value: string
  type: string
  description: string
}

export interface ChipErrorHover {
  value: string
  type: string
  description: string
}

export interface Free {
  value: string
  type: string
  description: string
}

export interface Beta {
  value: string
  type: string
  description: string
}

export interface Paid {
  value: string
  type: string
  description: string
}

export interface Elevation1 {
  value: Value
  type: string
  description: string
}

export interface Value {
  color: string
  type: string
  x: string
  y: string
  blur: string
  spread: string
}

export interface Elevation2 {
  value: Value2[]
  type: string
  description: string
}

export interface Value2 {
  color: string
  type: string
  x: string
  y: string
  blur: string
  spread: string
}

export interface Elevation3 {
  value: Value3[]
  type: string
  description: string
}

export interface Value3 {
  color: string
  type: string
  x: string
  y: string
  blur: string
  spread: string
}

export interface Elevation4 {
  value: Value4[]
  type: string
}

export interface Value4 {
  color: string
  type: string
  x: string
  y: string
  blur: string
  spread: string
}

export interface Tab {
  Active: Active
}

export interface Active {
  value: Value5
  type: string
  description: string
}

export interface Value5 {
  color: string
  type: string
  x: string
  y: string
  blur: string
  spread: string
}

export interface FontFamilies {
  capisce: Capisce
  inter: Inter
  "source-code-pro": SourceCodePro
  roboto: Roboto
}

export interface Capisce {
  value: string
  type: string
}

export interface Inter {
  value: string
  type: string
}

export interface SourceCodePro {
  value: string
  type: string
}

export interface Roboto {
  value: string
  type: string
}

export interface LineHeights {
  "0": N0
  "1": N1
  "2": N22
  "3": N3
  "4": N42
  "5": N5
}

export interface N0 {
  value: string
  type: string
}

export interface N1 {
  value: string
  type: string
}

export interface N22 {
  value: string
  type: string
}

export interface N3 {
  value: string
  type: string
}

export interface N42 {
  value: string
  type: string
}

export interface N5 {
  value: string
  type: string
}

export interface FontWeights {
  "capisce-0": Capisce0
  "inter-1": Inter1
  "inter-2": Inter2
  "inter-3": Inter3
  "source-code-pro-4": SourceCodePro4
  "roboto-5": Roboto5
  "roboto-6": Roboto6
}

export interface Capisce0 {
  value: string
  type: string
}

export interface Inter1 {
  value: string
  type: string
}

export interface Inter2 {
  value: string
  type: string
}

export interface Inter3 {
  value: string
  type: string
}

export interface SourceCodePro4 {
  value: string
  type: string
}

export interface Roboto5 {
  value: string
  type: string
}

export interface Roboto6 {
  value: string
  type: string
}

export interface FontSize {
  "0": N02
  "1": N13
  "2": N23
  "3": N33
  "4": N43
  "5": N52
  "6": N6
}

export interface N02 {
  value: string
  type: string
}

export interface N13 {
  value: string
  type: string
}

export interface N23 {
  value: string
  type: string
}

export interface N33 {
  value: string
  type: string
}

export interface N43 {
  value: string
  type: string
}

export interface N52 {
  value: string
  type: string
}

export interface N6 {
  value: string
  type: string
}

export interface LetterSpacing {
  "0": N03
  "1": N14
}

export interface N03 {
  value: string
  type: string
}

export interface N14 {
  value: string
  type: string
}

export interface ParagraphSpacing {
  "0": N04
  "1": N15
}

export interface N04 {
  value: string
  type: string
}

export interface N15 {
  value: string
  type: string
}

export interface H1 {
  value: Value6
  type: string
  description: string
}

export interface Value6 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface H2 {
  value: Value7
  type: string
  description: string
}

export interface Value7 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface H2Display {
  value: Value8
  type: string
  description: string
}

export interface Value8 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface H3 {
  value: Value9
  type: string
  description: string
}

export interface Value9 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface H4 {
  value: Value10
  type: string
  description: string
}

export interface Value10 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface Subtitle {
  value: Value11
  type: string
  description: string
}

export interface Value11 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface BodyLarge {
  value: Value12
  type: string
  description: string
}

export interface Value12 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface Body {
  value: Value13
  type: string
}

export interface Value13 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface BodyBold {
  value: Value14
  type: string
  description: string
}

export interface Value14 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface Caption {
  value: Value15
  type: string
  description: string
}

export interface Value15 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface CaptionBold {
  value: Value16
  type: string
  description: string
}

export interface Value16 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface Code {
  value: Value17
  type: string
  description: string
}

export interface Value17 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface RecipientUi {
  "Draftail H1": DraftailH1
  "Draftail H2": DraftailH2
  "Draftail H3": DraftailH3
  "Draftail Paragraph": DraftailParagraph
  "Draftail Body": DraftailBody
}

export interface DraftailH1 {
  value: Value18
  type: string
  description: string
}

export interface Value18 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface DraftailH2 {
  value: Value19
  type: string
  description: string
}

export interface Value19 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface DraftailH3 {
  value: Value20
  type: string
  description: string
}

export interface Value20 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface DraftailParagraph {
  value: Value21
  type: string
  description: string
}

export interface Value21 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface DraftailBody {
  value: Value22
  type: string
  description: string
}

export interface Value22 {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing: string
  paragraphSpacing: string
  textCase: string
  textDecoration: string
}

export interface TextCase {
  none: None
  uppercase: Uppercase
}

export interface None {
  value: string
  type: string
}

export interface Uppercase {
  value: string
  type: string
}

export interface TextDecoration {
  none: None2
}

export interface None2 {
  value: string
  type: string
}

export interface Small {
  value: string
  type: string
}

export interface XLarge {
  value: string
  type: string
  description: string
}

export interface BackgroundDefault {
  value: string
  type: string
}

export interface EnableText {
  value: string
  type: string
}

export interface Xsmall {
  value: string
  type: string
}

export interface None3 {
  value: string
  type: string
}

export interface Default {
  value: string
  type: string
}
