import { Composition } from 'remotion';
import { RobotsUltra } from './RobotsUltra';
import { YoutubePolicyGodModeV2 } from './YoutubePolicyGodMode_v2';
import { YoutubePolicyGodModeV3 } from './YoutubePolicyGodMode_v3';
import { YoutubePolicyGodModeV4 } from './YoutubePolicyGodMode_v4';
import { PPTVideoPremium } from './PPTVideoPremium';
import { PPTVideoPremiumV2 } from './PPTVideoPremiumV2';
import { PPTVideoExpress } from './PPTVideoExpress';
import { YoutubePolicyPremiumFast } from './YoutubePolicyPremiumFast';
import { TheEndOfRisk } from './TheEndOfRisk';
import { YoutubeDemo } from './YoutubeDemo';
import { ChatGPTDemo } from './ChatGPTDemo';
import { WhyHumansForget } from './WhyHumansForget';
import { NoTaxesWorld } from './NoTaxesWorld';
import { ViralExplainer } from './ViralExplainer';
import { PunchStoryViralPremium } from './PunchStoryViralPremium';
import { HeraEngine, HeraManifest } from './HeraEngine';
import { MOTION_THEME } from './components/MotionLibrary';
import { NvidiaEpicExplainer } from './NvidiaExplainer';
import { NvidiaCinematicExplainer } from './nvidia/NvidiaCinematic';
import { PerplexityDemo } from './PerplexityDemo';
import { IranNuclearTalks } from './IranNuclearTalks';
import { TrumpAnthropicBan } from './TrumpAnthropicBan';
import { DarkPsychology } from './DarkPsychology';
import { WarNewsExplainer } from './WarNewsExplainer';
import { WeirdTechExplainer } from './WeirdTechExplainer';
import { GoldSkyrocketing } from './GoldSkyrocketing';
import { PowerOfMoneyVideo } from './PowerOfMoney';
import { VideoStitcher } from './VideoStitcher';
import { USDebtDocumentary } from './USDebtDocumentary';
import { USDebtPro } from './USDebtPro';
import { USDebtUltra } from './USDebtUltra';
import { CareerLanding } from './CareerLanding';
import { UpgradeShowcase } from './UpgradeShowcase';
import { GeminiSpark } from './GeminiSpark';
import { HormuzDocumentary } from './HormuzDocumentary';
import { GoldResearch30s } from './GoldResearch30s';
import { ChinaOvertaking } from './ChinaOvertaking';
import { CarSubscriptions } from './CarSubscriptions';
import { FinanceIllustrationSample } from './FinanceIllustrationSample';
import { HandwrittenFinanceIllustration } from './HandwrittenFinanceIllustration';
import { MasterHybridExplainer } from './MasterHybridExplainer';
import { DataEngineeringKafka } from './DataEngineeringKafka';
import { TalkingHeadExplainer } from './TalkingHeadExplainer';
import { PipelineVideoRenderer } from './PipelineVideoRenderer';
import { LavaLampEncryption } from './LavaLampEncryption';
import { PureCartoonExplainer } from './PureCartoonExplainer';
import { UltraCartoonExplainer } from './UltraCartoonExplainer';
import { UnseenSystemStory } from './UnseenSystemStory';
import { MasterUnseenCartoonStory } from './MasterUnseenCartoonStory';
import { FiveMinUnseenMasterpiece } from './FiveMinUnseenMasterpiece';
import { TeluguUnseenStory } from './TeluguUnseenStory';
import { TeluguVijaySwathiStory } from './TeluguVijaySwathiStory';
import { TenMinUnseenMasterpiece } from './TenMinUnseenMasterpiece';
import { ShowreelTeaser } from './ShowreelTeaser';
import { FinancialDocumentary, calculateFinancialDocMetadata, defaultFinancialDocProps } from './finance-doc';
export const RemotionRoot: React.FC = () => {
    const nvidiaManifest: HeraManifest = {
        bgVideo: "videos/ocean_bg.mp4", // Using existing video as base
        events: [
            { id: 'n1', start: 1, duration: 5, type: 'highlight', text: 'NVIDIA RECORD PROFITS', icon: 'money', color: MOTION_THEME.accent, sfx: 'whoosh.mp3' },
            { id: 'n2', start: 7, duration: 5, type: 'highlight', text: '5.5% CRASH', icon: 'chart-down', color: MOTION_THEME.danger, sfx: 'pop.mp3' },
            { id: 'n3', start: 13, duration: 6, type: 'highlight', text: 'THE AI BUBBLE?', icon: 'chip', color: MOTION_THEME.warning, sfx: 'rise.mp3' },
            { id: 'n4', start: 20, duration: 5, type: 'highlight', text: 'GLOBAL SELL-OFF', icon: 'planet', color: MOTION_THEME.danger, sfx: 'whoosh.mp3' }
        ]
    };

    const therianManifest: HeraManifest = {
        bgVideo: "videos/ocean_bg.mp4",
        events: [
            { id: 't1', start: 1, duration: 5, type: 'highlight', text: 'BUENOS AIRES', icon: 'planet', color: MOTION_THEME.accent, sfx: 'whoosh.mp3' },
            { id: 't2', start: 6, duration: 6, type: 'highlight', text: 'MEET THERIANS', icon: 'mask', color: MOTION_THEME.warning, sfx: 'pop.mp3' },
            { id: 't3', start: 13, duration: 5, type: 'highlight', text: 'NOT A COSTUME', icon: 'paw', color: MOTION_THEME.danger, sfx: 'whoosh.mp3' }
        ]
    };

    const oceanManifest: HeraManifest = {
        bgVideo: "videos/ocean_bg.mp4",
        events: [
            { id: 'o1', start: 2, duration: 6, type: 'highlight', text: 'NO OCEANS?', icon: 'wave', color: '#3B82F6', sfx: 'whoosh.mp3' }
        ]
    };

    return (
        <>
            <Composition
                id="RobotsUltra"
                component={RobotsUltra}
                durationInFrames={9830} // ~5:27 video at 30 fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TrumpAnthropicBan"
                component={TrumpAnthropicBan}
                durationInFrames={5715}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="DarkPsychology"
                component={DarkPsychology}
                durationInFrames={10745}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="IranNuclearTalks"
                component={IranNuclearTalks}
                durationInFrames={8694}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PerplexityDemo"
                component={PerplexityDemo}
                durationInFrames={3719}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="NvidiaHera"
                component={HeraEngine}
                durationInFrames={900} // 30 seconds
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ manifest: nvidiaManifest }}
            />
            <Composition
                id="TherianHera"
                component={HeraEngine}
                durationInFrames={1200}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ manifest: therianManifest }}
            />
            <Composition
                id="OceanHera"
                component={HeraEngine}
                durationInFrames={4640}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ manifest: oceanManifest }}
            />
            <Composition
                id="NvidiaEpicExplainer"
                component={NvidiaEpicExplainer}
                durationInFrames={4650} // 155 seconds * 30 fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="NvidiaCinematic"
                component={NvidiaCinematicExplainer}
                durationInFrames={7080} // 3:56 = 236 seconds * 30 fps
                fps={30}
                width={1920}
                height={1080}
            />
            {/* OceanDisappearance disabled — ocean_bg.mp4 missing
            <Composition
                id="OceanDisappearance"
                component={OceanDisappearance}
                durationInFrames={4640}
                fps={30}
                width={1920}
                height={1080}
            />
            */}
            <Composition
                id="PunchStoryViralPremium"
                component={PunchStoryViralPremium}
                durationInFrames={3750} // 125 seconds * 30 fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="NoTaxesWorld"
                component={NoTaxesWorld}
                durationInFrames={1521} // Intro (90) + 4 chapters (358+358+360+355)
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ViralExplainer"
                component={ViralExplainer}
                durationInFrames={360} // 12 seconds
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="WhyHumansForget"
                component={WhyHumansForget}
                durationInFrames={5400} // 3 minutes at 30fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TheEndOfRisk"
                component={TheEndOfRisk}
                durationInFrames={990} // ~33 seconds
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="YoutubePolicyPremium"
                component={YoutubePolicyGodModeV2}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="YoutubePolicyPremiumV3"
                component={YoutubePolicyGodModeV3}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="YoutubePolicyPremiumV4"
                component={YoutubePolicyGodModeV4}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="YoutubePolicyPremiumFast"
                component={YoutubePolicyPremiumFast}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PPTVideoPremium"
                component={PPTVideoPremium}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PPTVideoPremiumV2"
                component={PPTVideoPremiumV2}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PPTVideoExpress"
                component={PPTVideoExpress}
                durationInFrames={1800}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="YoutubeDemo"
                component={YoutubeDemo}
                durationInFrames={300} // 10 seconds
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ChatGPTDemo"
                component={ChatGPTDemo}
                durationInFrames={1800} // 60 seconds
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="WarNewsExplainer"
                component={WarNewsExplainer}
                durationInFrames={2796}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="WeirdTechExplainer"
                component={WeirdTechExplainer}
                durationInFrames={6679}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="GoldSkyrocketing"
                component={GoldSkyrocketing}
                durationInFrames={3882}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PowerOfMoney"
                component={PowerOfMoneyVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="VideoStitcher"
                component={VideoStitcher}
                durationInFrames={75440}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="USDebtDocumentary"
                component={USDebtDocumentary}
                durationInFrames={9000} // 300 seconds * 30 fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="USDebtFinal"
                component={USDebtPro}
                durationInFrames={8366}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="USDebtUltra"
                component={USDebtUltra}
                durationInFrames={8366}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="CareerLanding"
                component={CareerLanding}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="UpgradeShowcase"
                component={UpgradeShowcase}
                durationInFrames={810}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="GeminiSpark"
                component={GeminiSpark}
                durationInFrames={900}
                fps={30}
                width={1080}
                height={1920}
            />
            <Composition
                id="HormuzDocumentary"
                component={HormuzDocumentary}
                durationInFrames={9000}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="GoldResearch30s"
                component={GoldResearch30s}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ChinaOvertaking"
                component={ChinaOvertaking}
                durationInFrames={3324}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="CarSubscriptions"
                component={CarSubscriptions}
                durationInFrames={6914}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="FinanceIllustrationSample"
                component={FinanceIllustrationSample}
                durationInFrames={750}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="HandwrittenFinanceIllustration"
                component={HandwrittenFinanceIllustration}
                durationInFrames={720}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="MasterHybridExplainer"
                component={MasterHybridExplainer}
                durationInFrames={750}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="DataEngineeringKafka"
                component={DataEngineeringKafka}
                durationInFrames={720}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TalkingHeadExplainer"
                component={TalkingHeadExplainer}
                durationInFrames={750}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PipelineVideoRenderer"
                component={PipelineVideoRenderer}
                durationInFrames={2730}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="LavaLampEncryption"
                component={LavaLampEncryption}
                durationInFrames={2502}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="PureCartoonExplainer"
                component={PureCartoonExplainer}
                durationInFrames={660}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="UltraCartoonExplainer"
                component={UltraCartoonExplainer}
                durationInFrames={690}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="UnseenSystemStory"
                component={UnseenSystemStory}
                durationInFrames={2085}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="MasterUnseenCartoonStory"
                component={MasterUnseenCartoonStory}
                durationInFrames={2295}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="FiveMinUnseenMasterpiece"
                component={FiveMinUnseenMasterpiece}
                durationInFrames={4823}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TeluguUnseenStory"
                component={TeluguUnseenStory}
                durationInFrames={1556}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TeluguVijaySwathiStory"
                component={TeluguVijaySwathiStory}
                durationInFrames={1402}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="TenMinUnseenMasterpiece"
                component={TenMinUnseenMasterpiece}
                durationInFrames={5567}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ShowreelTeaser"
                component={ShowreelTeaser}
                durationInFrames={450}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="FinancialDocumentary"
                component={FinancialDocumentary}
                durationInFrames={30 * 45}
                fps={30}
                width={1080}
                height={1920}
                defaultProps={defaultFinancialDocProps}
                calculateMetadata={calculateFinancialDocMetadata}
            />
        </>
    );
};
