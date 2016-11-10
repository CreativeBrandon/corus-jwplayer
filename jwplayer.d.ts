// Type definitions for JW Player
// Project: http://developer.longtailvideo.com/trac/
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

interface JWPlayer {
    addButton(icon: string, label: string, handler: () => void, id: string): void;
    getBuffer(): number;
    getCaptionsList(): any[];
    getControls(): boolean;
    getCurrentCaptions(): number;
    getCurrentQuality(): number;
    getDuration(): number;
    getHeight(): number;
    getFullscreen(): boolean;
    getMute(): boolean;
    getPlaylist(): any[];
    getPlaylistIndex(): number;
    getPlaylistItem(index?: number): PlaylistItem;
    getPosition(): number;
    getQualityLevels(): any[];
    getRenderingMode(): string;
    getSafeRegion(): any[];
    getState(): string;
    getVolume(): number;
    getWidth(): number;
    load(playlist: any): void;
    load(playlist: string): void;
    onAdCompanions(callback: (e: AdCompanionsOptions) => void): void;
    onAdComplete(callback: (e: AdCompleteOptions) => void): void;
    onAdImpression(callback: (e: AdImpressionOptions) => void): void;
    onBeforePlay(callback: () => void): void;
    onBuffer(callback: () => void): void;
    onBufferChange(callback: (e: BufferOptions) => void): void;
    onCaptionsChange(callback: (e: CaptionsChangeOptions) => void): void;
    onCaptionsList(callback: () => void): void;
    onComplete(callback: () => void): void;
    onControls(callback: () => void): void;
    onDisplayClick(callback: () => void): void;
    onError(callback: () => void): void;
    onFullscreen(callback: (e: FullscreenOptions) => void): void;
    onIdle(callback: () => void): void;
    onMeta(callback: () => void): void;
    onMute(callback: () => void): void;
    onPause(callback: () => void): void;
    onPlay(callback: (e: PlayOptions) => void): void;
    onPlaylist(callback: () => void): void;
    onPlaylistItem(callback: () => void): void;
    onPlaylistComplete(callback: () => void): void;
    onReady(callback: () => void): void;
    onResize(callback: () => void): void;
    onQualityChange(callback: () => void): void;
    onQualityLevels(callback: () => void): void;
    onSeek(callback: () => void): void;
    onTime(callback: (e: OnTimeEvent) => void): void;
    onVolume(callback: () => void): void;
    pause(): void;
    play(): void;
    playlistItem(index: number): void;
    registerPlugin(id: string, target: string, jsPlugin: () => void, swfURL?: string): void;
    remove(): void;
    removeButton(id: string): void;
    resize(width: number, height: number): void;
    seek(position: number): void;
    setControls(controls: boolean): void;
    setCurrentCaptions(index: number): void;
    setCurrentQuality(index: number): void;
    setMute(state: boolean): void;
    setup(options: any): JWPlayer;
    setVolume(volume: number): void;
    stop(): void;
}

interface JWPlayerStatic {
    (id: string): JWPlayer;
}

interface AdvertisingOptions {
    client: string,
    tag?: string,
    admessage?: string,
    skipoffset?: string,
    cuetext?: string,
    skipmessage?: string,
    skiptext?: string,
    vpaidmode?: string,
    schedule?: string,
    companiondiv?: AdDiv
}

interface AdBaseOptions {
    adtitle: string;
    ima: any;
    linear: string;
    podcount: number;
    sequence: number;
}

interface AdDiv {
    id: string,
    width: number,
    height: number,
    resource?: any
}

interface AdCompleteOptions extends AdBaseOptions {
    client: string;
    creativetype: string;
    tag: string;
}

interface AdImpressionOptions extends AdBaseOptions {
    adposition: string;
    adsystem: string;
    client: string;
    tag: string;
}

interface BufferOptions {
    duration: number,
    bufferPercent: number,
    position: number,
    metaData?: number
}

interface Caption {
    id: string;
    label: string;
}

interface CaptionsChangeOptions {
    track: number;
    tracks: Caption[];
    type: string;
}

interface FullscreenOptions {
    fullscreen: boolean;
}

interface PlayOptions {
    oldstate: string;
}

interface AdCompanionsOptions {
    companions: AdDiv[]
}

interface OnTimeEvent {
    duration: number,
    position: number
}

interface PlaylistItem {
    description: string,
    mediaid: string,
    file: string,
    image: string,
    preload: string,
    title: string,
    tracks: any[],
    sources: Object[],
    allSources: any[],
    show?: string
}

declare var jwplayer: JWPlayerStatic;
