/**
 * Describes point objects used internally in marker.js 2.
 */
interface IPoint {
    x: number;
    y: number;
}

/**
 * Describes customizable marker.js UI settings.
 */
interface IStyleSettings {
    /**
     * Background color for the editor canvas when in popup mode.
     */
    canvasBackgroundColor?: string;
    /**
     * Background color of the toolbar block.
     */
    toolbarBackgroundColor?: string;
    /**
     * Background color of toolbar buttons on hover.
     */
    toolbarBackgroundHoverColor?: string;
    /**
     * Foreground color of toolbar icons.
     */
    toolbarColor?: string;
    /**
     * Base height of the toolbar block in pixels.
     */
    toolbarHeight?: number;
    /**
     * If set to true, the toolbar is hidden.
     */
    hideToolbar?: boolean;
    /**
     * If set to true, the toolbox is hidden.
     */
    hideToolbox?: boolean;
    /**
     * Is undo button visible?
     *
     * @since 2.6.0
     */
    undoButtonVisible?: boolean;
    /**
     * Is redo button visible?
     *
     * @since 2.6.0
     */
    redoButtonVisible?: boolean;
    /**
     * Is notes button visible?
     *
     * @since 2.10.0
     */
    notesButtonVisible?: boolean;
    /**
     * Is zoom button visible?
     *
     * @since 2.12.0
     */
    zoomButtonVisible?: boolean;
    /**
     * Is zoom out button visible?
     *
     * @since 2.13.0
     */
    zoomOutButtonVisible?: boolean;
    /**
     * Is clear button visible?
     *
     * @since 2.15.0
     */
    clearButtonVisible?: boolean;
    /**
     * Are render and close buttons visible?
     *
     * @since 2.18.0
     */
    resultButtonBlockVisible?: boolean;
    /**
     * Background color of the toolbox (property panel) block.
     */
    toolboxBackgroundColor?: string;
    /**
     * Foreground color of toolbox buttons and objects.
     */
    toolboxColor?: string;
    /**
     * Accent color for selected toolbox objects.
     */
    toolboxAccentColor?: string;
    /**
     * Custom icon color for the select (pointer) toolbar button
     */
    selectButtonColor?: string;
    /**
     * Custom icon color for the delete toolbar button
     */
    deleteButtonColor?: string;
    /**
     * Custom icon color for the OK (render) toolbar button
     */
    okButtonColor?: string;
    /**
     * Custom icon color for the close (cancel) toolbar button
     */
    closeButtonColor?: string;
    /**
     * CSS class name defining the visual style of the toolbar block.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolbarStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the toolbar overflow block.
     * Displayed when markers don't fit in the main toolbar block.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolbarOverflowBlockStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the toolbar buttons.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolbarButtonStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the active (selected) toolbar button.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolbarActiveButtonStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the toolbox (property panel) block.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolboxStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the toolbox buttons.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolboxButtonStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the active (selected) toolbox button.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolboxActiveButtonStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the panel containing toolbox buttons.
     * That is the top level panel with buttons switching active toolbox panels.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolboxButtonRowStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the panel containing specific toolbox properties.
     * This is the popup panel that opens when a toolbox button is pressed.
     *
     * _Note_: should only be used for colors and similar styles. Changing layout-related styles here can break the UI.
     */
    toolboxPanelRowStyleColorsClassName?: string;
    /**
     * CSS class name defining the visual style of the note editing text area.
     *
     * @since 2.10.0
     */
    notesAreaStyleClassName?: string;
    /**
     * Position logo in the free version on the bottom left or right of the marker area. Default - left.
     *
     * @since 2.14.0
     */
    logoPosition?: 'left' | 'right';
    /**
     * zIndex for the marker.js UI.
     *
     * Defaults to 5 in inline mode and 1000 in popup mode.
     *
     * @since 2.15.0
     */
    zIndex?: string;
}

/**
 * Base class for all toolbox property panels.
 */
declare abstract class ToolboxPanel {
    /**
     * Panel name/title.
     */
    title: string;
    /**
     * Panel button icon as an SVG markup.
     */
    icon: string;
    /**
     * UI style settings for colors, etc.
     */
    uiStyleSettings: IStyleSettings;
    /**
     * Create panel with supplied title and icon.
     * @param title - panel name (used for accessibility)
     * @param icon - panel button icon (SVG image markup)
     */
    constructor(title: string, icon?: string);
    /**
     * Returns toolbox panel UI.
     */
    abstract getUi(): HTMLDivElement;
}

/**
 * Represents marker's state (status) in time.
 */
declare type MarkerState = 'new' | 'creating' | 'select' | 'move' | 'resize' | 'rotate' | 'edit';
/**
 * Represents marker's state used to save and restore state continue annotation in the future.
 */
interface MarkerBaseState {
    /**
     * Marker's type name.
     */
    typeName: string;
    /**
     * Current editing state/status.
     */
    state: MarkerState;
    /**
     * Additional information about the marker.
     *
     * @since 2.10.0
     */
    notes?: string;
}

/**
 * Represents a list of colors.
 */
declare type ColorSet = string[];
/**
 * marker.js 2 display mode - `inline` or `popup`.
 */
declare type DisplayMode = 'inline' | 'popup';
/**
 * Default settings for marker.js 2 markers.
 */
declare class Settings {
    /**
     * List of colors used in color pickers.
     */
    defaultColorSet: ColorSet;
    /**
     * Default foreground color.
     */
    defaultColor: string;
    /**
     * Default fill color.
     */
    defaultFillColor: string;
    /**
     * Default stroke color for markers with background (eg. {@link CalloutMarker}).
     */
    defaultStrokeColor: string;
    /**
     * Default highlighter color.
     */
    defaultHighlightColor: string;
    /**
     * Default stroke (line) width.
     */
    defaultStrokeWidth: number;
    /**
     * Default line dash array
     */
    defaultStrokeDasharray: string;
    /**
     * Default opacity (alpha) of the {@link HighlightMarker} (and other highlighters).
     */
    defaultHighlightOpacity: number;
    /**
     * Default font family for text-based markers (eg. {@link TextMarker} and {@link CalloutMarker}).
     *
     */
    defaultFontFamily: string;
    /**
     * Stroke (line) width options.
     */
    defaultStrokeWidths: number[];
    /**
     * Stroke dash array options.
     */
    defaultStrokeDasharrays: string[];
    /**
     * Opacity options.
     */
    defaultOpacitySteps: number[];
    /**
     * Default display mode.
     */
    displayMode: DisplayMode;
    /**
     * Font family options.
     */
    defaultFontFamilies: string[];
    /**
     * Margin in pixels between marker.js popup UI and window borders.
     */
    popupMargin: number;
    /**
     * Create a new Freehand marker for every stroke.
     */
    newFreehandMarkerOnPointerUp: boolean;
    /**
     * If set to true, when colors on a marker are changed
     * it changes the default color for other markers as well.
     *
     * @since 2.7.0
     */
    defaultColorsFollowCurrentColors: boolean;
    /**
     * Increase this setting for smoother FreehandMarker lines.
     * Note that it will also take more space when you save the state.
     *
     * @since 2.20.0
     */
    freehandPixelRatio: number;
    /**
     * When set to true rotation feature is disabled on markers.
     * This doesn't affect markers restored from a previously saved state.
     *
     * @since 2.22.0
     */
    disableRotation: boolean;
}

/**
 * Base class for all available and custom marker types.
 *
 * All markers used with marker.js 2 should be descendants of this class.
 */
declare class MarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Instance property returning marker's type name.
     *
     * @since 2.16.0
     */
    get typeName(): string;
    protected _container: SVGGElement;
    /**
     * SVG container object holding the marker's visual.
     */
    get container(): SVGGElement;
    protected _overlayContainer: HTMLDivElement;
    /**
     * HTML container that can be used to render overlay objects while the marker is active.
     *
     * For example, this is used for the text editing layer while editing text in the {@see TextMarker}.
     */
    get overlayContainer(): HTMLDivElement;
    protected _state: MarkerState;
    /**
     * Current marker state.
     *
     * Both MarkerArea and the marker itself can react differently to different events based on what state the marker is in.
     */
    get state(): MarkerState;
    protected globalSettings: Settings;
    /**
     * Additional information about the marker
     */
    notes?: string;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Method called when marker creation is finished.
     */
    onMarkerCreated: (marker: MarkerBase) => void;
    /**
     * Method to call when foreground color changes.
     */
    onColorChanged?: (color: string) => void;
    /**
     * Method to call when background/fill color changes.
     */
    onFillColorChanged?: (color: string) => void;
    /**
     * Method to call when marker state changes.
     *
     * @since 2.23.0
     */
    onStateChanged?: (marker: MarkerBase) => void;
    /**
     * Marker's state when it is selected
     *
     * @since 2.23.0
     */
    protected manipulationStartState?: MarkerBaseState;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Is this marker selected?
     *
     * @since 2.16.0
     */
    protected _isSelected: boolean;
    /**
     * Returns true if the marker is currently selected
     *
     * @since 2.16.0
     */
    get isSelected(): boolean;
    /**
     * Selects this marker and displays appropriate selected marker UI.
     */
    select(): void;
    /**
     * Deselects this marker and hides selected marker UI.
     */
    deselect(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) double click event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    dblClick(point: IPoint, target?: EventTarget): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     */
    pointerUp(point: IPoint): void;
    /**
     * Disposes the marker and clean's up.
     */
    dispose(): void;
    protected addMarkerVisualToContainer(element: SVGElement): void;
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): MarkerBaseState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
    /**
     * Called by a marker when its foreground color changes.
     * @param color
     */
    protected colorChanged(color: string): void;
    /**
     * Called by a marker when its background/fill color changes.
     * @param color
     */
    protected fillColorChanged(color: string): void;
    /**
     * Called by a marker when its state could have changed.
     * Does a check if the state has indeed changed before firing the handler.
     *
     * @since 2.23.0
     */
    protected stateChanged(): void;
}

/**
 * @see {@link StyleManager}
 * @deprecated use instance level `styles` instead.
 */
declare class Style {
    /**
     * @see {@link StyleManager}
     * @deprecated use instance level `styles.styleSheetRoot` instead.
     */
    static styleSheetRoot: HTMLElement;
}
/**
 * Simple utility CSS-in-JS implementation.
 */
declare class StyleManager {
    /**
     * Prefix used for all internally created CSS classes.
     */
    private _classNamePrefixBase;
    /**
     * Static CSS class name used for the wrapper element.
     */
    get classNamePrefixBase(): string;
    private _classNamePrefix;
    /**
     * Prefix used for all internally created CSS classes.
     */
    get classNamePrefix(): string;
    private classes;
    private rules;
    private styleSheet?;
    /**
     * For cases when you need to add the stylesheet to anything
     * other than document.head (default), set this property
     * befor calling `MarkerArea.show()`.
     *
     * Example: here we set the rendering/placement root (targetRoot)
     * to the `shadowRoot` of a web componet and set `styleSheetRoot`
     * to the same value as well.
     *
     * ```javascript
     * const markerArea = new markerjs2.MarkerArea(target);
     * markerArea.targetRoot = this.shadowRoot;
     * markerArea.styles.styleSheetRoot = this.shadowRoot;
     * markerArea.show();
     * ```
     *
     */
    styleSheetRoot: HTMLElement;
    /**
     * Returns default UI styles.
     */
    get defaultSettings(): IStyleSettings;
    /**
     * Holds current UI styles.
     */
    settings: IStyleSettings;
    /**
     * Returns global fade-in animation class name.
     */
    get fadeInAnimationClassName(): string;
    /**
     * Returns global fade-out animation class name.
     */
    get fadeOutAnimationClassName(): string;
    /**
     * Initializes a new style manager.
     * @param instanceNo - instance id.
     */
    constructor(instanceNo: number);
    /**
     * Adds a CSS class declaration.
     * @param styleClass - class to add.
     */
    addClass(styleClass: StyleClass): StyleClass;
    /**
     * Add arbitrary CSS rule
     * @param styleRule - CSS rule to add.
     */
    addRule(styleRule: StyleRule): void;
    private addStyleSheet;
    removeStyleSheet(): void;
}
/**
 * Represents an arbitrary CSS rule.
 */
declare class StyleRule {
    /**
     * CSS selector.
     */
    selector: string;
    /**
     * Style declaration for the rule.
     */
    style: string;
    /**
     * Creates an arbitrary CSS rule using the selector and style rules.
     * @param selector - CSS selector
     * @param style - styles to apply
     */
    constructor(selector: string, style: string);
}
/**
 * Represents a CSS class.
 */
declare class StyleClass {
    /**
     * CSS style rules for the class.
     */
    style: string;
    /**
     * Class name without the global prefix.
     */
    localName: string;
    /**
     * Fully qualified CSS class name.
     */
    name: string;
    /**
     * Creates a CSS class declaration based on supplied (local) name and style rules.
     * @param name - local CSS class name (will be prefixed with the marker.js prefix).
     * @param style - style declarations.
     */
    constructor(name: string, style: string);
}

/**
 * Describes a MarkerArea state object used to save and restore marker.js state between sessions.
 */
interface MarkerAreaState {
    /**
     * Editing canvas width.
     */
    width: number;
    /**
     * Editing canvas height.
     */
    height: number;
    /**
     * States of individual markers.
     */
    markers: MarkerBaseState[];
}

declare class MarkerAreaEvent {
    markerArea: MarkerArea;
    cancelable: boolean;
    private _defaultPrevented;
    get defaultPrevented(): boolean;
    preventDefault(): void;
    constructor(markerArea: MarkerArea, cancelable?: boolean);
}
declare class MarkerAreaRenderEvent extends MarkerAreaEvent {
    dataUrl: string;
    state: MarkerAreaState;
    constructor(markerArea: MarkerArea, dataUrl: string, state: MarkerAreaState);
}
declare class MarkerEvent extends MarkerAreaEvent {
    marker?: MarkerBase;
    constructor(markerArea: MarkerArea, marker?: MarkerBase, cancelable?: boolean);
}
/**
 * General MarkerArea event handler type.
 */
declare type MarkerAreaEventHandler = (event: MarkerAreaEvent) => void;
/**
 * MarkerArea render event handler type.
 */
declare type MarkerAreaRenderEventHandler = (event: MarkerAreaRenderEvent) => void;
/**
 * Marker event handler type.
 */
declare type MarkerEventHandler = (event: MarkerEvent) => void;
/**
 * Describes a repository of MarkerArea event handlers.
 */
interface IEventListenerRepository {
    /**
     * Event handlers for the `render` event.
     */
    render: MarkerAreaRenderEventHandler[];
    /**
     * Event handlers for the `beforeclose` event.
     */
    beforeclose: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `close` event.
     */
    close: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `show` event.
     */
    show: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `restorestate` event.
     */
    restorestate: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `statechange` event.
     *
     * @since 2.23.0
     */
    statechange: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `markerselect` event.
     */
    markerselect: MarkerEventHandler[];
    /**
     * Event handlers for the `markerdeselect` event.
     */
    markerdeselect: MarkerEventHandler[];
    /**
     * Event handlers for the `markercreating` event.
     */
    markercreating: MarkerEventHandler[];
    /**
     * Event handlers for the `markercreated` event.
     */
    markercreate: MarkerEventHandler[];
    /**
     * Event handlers for the `markerbeforedelete` event.
     */
    markerbeforedelete: MarkerEventHandler[];
    /**
     * Event handlers for the `markerdelete` event.
     */
    markerdelete: MarkerEventHandler[];
    /**
     * Event handlers for the `markerchange` event.
     *
     * @since 2.23.0
     */
    markerchange: MarkerEventHandler[];
    /**
     * Event handlers for the `focus` event.
     *
     * @since 2.19.0
     */
    focus: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `blur` event.
     *
     * @since 2.19.0
     */
    blur: MarkerAreaEventHandler[];
}
/**
 * Event handler type for a specific event type.
 */
declare type EventHandler<T extends keyof IEventListenerRepository> = T extends 'markerselect' ? MarkerEventHandler : T extends 'markerdeselect' ? MarkerEventHandler : T extends 'markercreating' ? MarkerEventHandler : T extends 'markercreate' ? MarkerEventHandler : T extends 'markerbeforedelete' ? MarkerEventHandler : T extends 'markerdelete' ? MarkerEventHandler : T extends 'markerchange' ? MarkerEventHandler : T extends 'render' ? MarkerAreaRenderEventHandler : MarkerAreaEventHandler;
/**
 * Event handler repository.
 */
declare class EventListenerRepository implements IEventListenerRepository {
    /**
     * Event handlers for the `render` event.
     */
    render: MarkerAreaRenderEventHandler[];
    /**
     * Event handlers for the `beforeclose` event.
     */
    beforeclose: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `close` event.
     */
    close: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `show` event.
     */
    show: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `restorestate` event.
     */
    restorestate: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `statechange` event.
     *
     * @since 2.23.0
     */
    statechange: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `markerselect` event.
     */
    markerselect: MarkerEventHandler[];
    /**
     * Event handlers for the `markerdeselect` event.
     */
    markerdeselect: MarkerEventHandler[];
    /**
     * Event handlers for the `markercreating` event.
     */
    markercreating: MarkerEventHandler[];
    /**
     * Event handlers for the `markercreate` event.
     */
    markercreate: MarkerEventHandler[];
    /**
     * Event handlers for the `markerbeforedelete` event.
     */
    markerbeforedelete: MarkerEventHandler[];
    /**
     * Event handlers for the `markerdelete` event.
     */
    markerdelete: MarkerEventHandler[];
    /**
     * Event handlers for the `markerchange` event.
     *
     * @since 2.23.0
     */
    markerchange: MarkerEventHandler[];
    /**
     * Event handlers for the `focus` event.
     *
     * @since 2.19.0
     */
    focus: MarkerAreaEventHandler[];
    /**
     * Event handlers for the `blur` event.
     *
     * @since 2.19.0
     */
    blur: MarkerAreaEventHandler[];
    /**
     * Add an event handler for a specific event type.
     * @param eventType - event type.
     * @param handler - function to handle the event.
     */
    addEventListener<T extends keyof IEventListenerRepository>(eventType: T, handler: EventHandler<T>): void;
    /**
     * Remove an event handler for a specific event type.
     * @param eventType - event type.
     * @param handler - function currently handling the event.
     */
    removeEventListener<T extends keyof IEventListenerRepository>(eventType: T, handler: EventHandler<T>): void;
}

/**
 * Identifier for marker type when setting {@linkcode availableMarkerTypes}.
 * Marker type can be set as either a string or a marker type reference.
 */
declare type MarkerTypeIdentifier = string | typeof MarkerBase;
/**
 * Event handler type for {@linkcode MarkerArea} `render` event.
 */
declare type RenderEventHandler = (dataURL: string, state?: MarkerAreaState) => void;
/**
 * Event handler type for {@linkcode MarkerArea} `close` event.
 */
declare type CloseEventHandler = () => void;
/**
 * MarkerArea is the main class of marker.js 2. It controls the behavior and appearance of the library.
 *
 * The simplest marker.js 2 usage scenario looks something like this:
 *
 * ```typescript
 * import * as markerjs2 from 'markerjs2';
 * // create an instance of MarkerArea and pass the target image reference as a parameter
 * let markerArea = new markerjs2.MarkerArea(document.getElementById('myimg'));
 *
 * // register an event listener for when user clicks OK/save in the marker.js UI
 * markerArea.addEventListener('render', event => {
 *   // we are setting the markup result to replace our original image on the page
 *   // but you can set a different image or upload it to your server
 *   document.getElementById('myimg').src = event.dataUrl;
 * });
 *
 * // finally, call the show() method and marker.js UI opens
 * markerArea.show();
 * ```
 */
declare class MarkerArea {
    private target;
    private targetObserver;
    private width;
    private height;
    private imageWidth;
    private imageHeight;
    private left;
    private top;
    private windowHeight;
    private markerImage;
    private markerImageHolder;
    private defs;
    private coverDiv;
    private uiDiv;
    private contentDiv;
    private editorCanvas;
    private editingTarget;
    private overlayContainer;
    private touchPoints;
    private logoUI;
    /**
     * `targetRoot` is used to set an alternative positioning root for the marker.js UI.
     *
     * This is useful in cases when your target image is positioned, say, inside a div with `position: relative;`
     *
     * ```typescript
     * // set targetRoot to a specific div instead of document.body
     * markerArea.targetRoot = document.getElementById('myRootElement');
     * ```
     *
     * @default document.body
     */
    targetRoot: HTMLElement;
    /**
     * Returns a list of all built-in marker types for use with {@linkcode availableMarkerTypes}
     *
     * @readonly
     */
    get ALL_MARKER_TYPES(): typeof MarkerBase[];
    /**
     * Returns a list of default set of built-in marker types.
     * Used when {@linkcode availableMarkerTypes} isn't set explicitly.
     *
     * @readonly
     */
    get DEFAULT_MARKER_TYPES(): typeof MarkerBase[];
    /**
     * Returns a short list of essential built-in marker types for use with {@linkcode availableMarkerTypes}
     *
     * @readonly
     */
    get BASIC_MARKER_TYPES(): typeof MarkerBase[];
    private _availableMarkerTypes;
    /**
     * Gets or sets a list of marker types avaiable to the user in the toolbar.
     * The types can be passed as either type reference or a string type name.
     *
     * ```typescript
     * this.markerArea1.availableMarkerTypes = ['CalloutMarker', ...this.markerArea1.BASIC_MARKER_TYPES];
     * ```
     *
     * @default {@linkcode DEFAULT_MARKER_TYPES}
     */
    get availableMarkerTypes(): MarkerTypeIdentifier[];
    set availableMarkerTypes(value: MarkerTypeIdentifier[]);
    private toolbar;
    private toolbox;
    private mode;
    private currentMarker?;
    private markers;
    private isDragging;
    private bodyOverflowState;
    private scrollYState;
    private scrollXState;
    private renderEventListeners;
    private closeEventListeners;
    settings: Settings;
    uiStyleSettings: IStyleSettings;
    private _isOpen;
    /**
     * Returns `true` when MarkerArea is open and `false` otherwise.
     *
     * @readonly
     */
    get isOpen(): boolean;
    private undoRedoManager;
    /**
     * Returns true if undo operation can be performed (undo stack is not empty).
     *
     * @since 2.26.0
     */
    get isUndoPossible(): boolean;
    /**
     * Returns true if redo operation can be performed (redo stack is not empty).
     *
     * @since 2.26.0
     */
    get isRedoPossible(): boolean;
    /**
     * When set to true resulting image will be rendered at the natural (original) resolution
     * of the target image. Otherwise (default), screen dimensions of the image are used.
     *
     * @default false (use screen dimensions)
     */
    renderAtNaturalSize: boolean;
    /**
     * Type of image for the rendering result. Eg. `image/png` (default) or `image/jpeg`.
     *
     * @default `image/png`
     */
    renderImageType: string;
    /**
     * When rendering engine/format supports it (jpeg, for exmample),
     * sets the rendering quality for the resulting image.
     *
     * In case of `image/jpeg` the value should be between 0 (worst quality) and 1 (best quality).
     */
    renderImageQuality?: number;
    /**
     * When set to `true`, will render only the marker layer without the original image.
     * This could be useful when you want to non-destructively overlay markers on top of the original image.
     *
     * Note that in order for the markers layer to have a transparent background {@linkcode renderImageType}
     * should be set to a format supporting transparency, such as `image/png`.
     *
     * @default false
     */
    renderMarkersOnly: boolean;
    /**
     * When set and {@linkcode renderAtNaturalSize} is `false` sets the width of the rendered image.
     *
     * Both `renderWidth` and `renderHeight` have to be set for this to take effect.
     */
    renderWidth?: number;
    /**
     * When set and {@linkcode renderAtNaturalSize} is `false` sets the height of the rendered image.
     *
     * Both `renderWidth` and `renderHeight` have to be set for this to take effect.
     */
    renderHeight?: number;
    /**
     * If a canvas is specified here, then marker.js will render the output to this canvas
     * in addition to generating an image.
     *
     * @since 2.14.0
     */
    renderTarget?: HTMLCanvasElement;
    /**
     * Pressing zoom button iterates through values in this array.
     *
     * @since 2.12.0
     */
    zoomSteps: number[];
    private _zoomLevel;
    /**
     * Gets current zoom level.
     *
     * @since 2.12.0
     */
    get zoomLevel(): number;
    /**
     * Sets current zoom level.
     *
     * @since 2.12.0
     */
    set zoomLevel(value: number);
    private static instanceCounter;
    private _instanceNo;
    get instanceNo(): number;
    /**
     * Manage style releated settings via the `styles` property.
     */
    styles: StyleManager;
    /**
     * Creates a new MarkerArea for the specified target image.
     *
     * ```typescript
     * // create an instance of MarkerArea and pass the target image (or other HTML element) reference as a parameter
     * let markerArea = new markerjs2.MarkerArea(document.getElementById('myimg'));
     * ```
     *
     * When `target` is not an image object the output is limited to "markers only" (@linkcode renderMarkersOnly)
     * and "popup" mode won't work properly as the target object stays in it's original position and, unlike images,
     * is not copied.
     *
     * @param target image object to mark up.
     */
    constructor(target: HTMLImageElement | HTMLElement);
    private open;
    /**
     * Initializes the MarkerArea and opens the UI.
     */
    show(): void;
    /**
     * Renders the annotation result.
     *
     * Normally, you should use {@linkcode addEventListener} method to set a listener for the `render` event
     * rather than calling this method directly.
     */
    render(): Promise<string>;
    /**
     * Closes the MarkerArea UI.
     */
    close(suppressBeforeClose?: boolean): void;
    /**
     * Adds one or more markers to the toolbar.
     *
     * @param markers - one or more marker types to be added.
     */
    addMarkersToToolbar(...markers: typeof MarkerBase[]): void;
    /**
     * Add a `render` event listener which is called when user clicks on the OK/save button
     * in the toolbar.
     *
     * ```typescript
     * // register an event listener for when user clicks OK/save in the marker.js UI
     * markerArea.addRenderEventListener(dataUrl => {
     *   // we are setting the markup result to replace our original image on the page
     *   // but you can set a different image or upload it to your server
     *   document.getElementById('myimg').src = dataUrl;
     * });
     * ```
     *
     * This is where you place your code to save a resulting image and/or MarkerAreaState.
     *
     * @param listener - a method handling rendering results
     *
     * @see {@link MarkerAreaState}
     * @deprecated use `addEventListener('render', ...)` instead.
     */
    addRenderEventListener(listener: RenderEventHandler): void;
    /**
     * Remove a `render` event handler.
     *
     * @param listener - previously registered `render` event handler.
     * @deprecated use `removeEventListener('render', ...)` instead.
     */
    removeRenderEventListener(listener: RenderEventHandler): void;
    /**
     * Add a `close` event handler to perform actions in your code after the user
     * clicks on the close button (without saving).
     *
     * @param listener - close event listener
     * @deprecated use `addEventListener('close', ...)` instead.
     */
    addCloseEventListener(listener: CloseEventHandler): void;
    /**
     * Remove a `close` event handler.
     *
     * @param listener - previously registered `close` event handler.
     * @deprecated use `removeEventListener('close', ...)` instead.
     */
    removeCloseEventListener(listener: CloseEventHandler): void;
    private setupResizeObserver;
    private onPopupTargetResize;
    private setWindowHeight;
    private _isResizing;
    private resize;
    private scaleMarkers;
    private setEditingTarget;
    private setTopLeft;
    private initMarkerCanvas;
    /**
     * Adds "defs" element to the marker SVG element.
     * Useful for using custom fonts and potentially other scenarios.
     *
     * @param {(...(string | Node)[])} nodes
     * @see Documentation article on adding custom fonts for an example
     */
    addDefs(...nodes: (string | Node)[]): void;
    private initOverlay;
    private positionMarkerImage;
    private attachEvents;
    private attachWindowEvents;
    private detachEvents;
    private detachWindowEvents;
    /**
     * NOTE:
     *
     * before removing or modifying this method please consider supporting marker.js
     * by visiting https://markerjs.com/#price for details
     *
     * thank you!
     */
    private addLogo;
    private positionLogo;
    private overrideOverflow;
    private restoreOverflow;
    private showUI;
    private closeUI;
    private removeMarker;
    switchToSelectMode(): void;
    private toolbarButtonClicked;
    /**
     * Removes currently selected marker.
     */
    deleteSelectedMarker(): void;
    /**
     * Removes all markers.
     *
     * @since 2.15.0
     */
    clear(): void;
    private notesArea?;
    private get isNotesAreaOpen();
    private showNotesEditor;
    private hideNotesEditor;
    private selectLastMarker;
    private addUndoStep;
    /**
     * Undo last action.
     *
     * @since 2.6.0
     */
    undo(): void;
    private undoStep;
    /**
     * Redo previously undone action.
     *
     * @since 2.6.0
     */
    redo(): void;
    private redoStep;
    /**
     * Iterate zoom steps (@linkcode zoomSteps).
     * Next zoom level is selected or returns to the first zoom level restarting the sequence.
     *
     * @since 2.12.0
     */
    stepZoom(): void;
    /**
     * Iterate zoom steps (@linkcode zoomSteps).
     * Next zoom level is selected or returns to the first zoom level restarting the sequence.
     *
     * @author Oucema JLAIEL
     */
    stepZoomOut(): void;
    private prevPanPoint;
    private panTo;
    /**
     * Initiates markup rendering.
     *
     * Get results by adding a render event listener via {@linkcode addRenderEventListener}.
     */
    startRenderAndClose(): Promise<void>;
    /**
     * Returns the complete state for the MarkerArea that can be preserved and used
     * to continue annotation next time.
     *
     * @param deselectCurrentMarker - when `true` is passed, currently selected marker will be deselected before getting the state.
     */
    getState(deselectCurrentMarker?: boolean): MarkerAreaState;
    /**
     * Restores MarkerArea state to continue previous annotation session.
     *
     * **IMPORTANT**: call `restoreState()` __after__ you've opened the MarkerArea with {@linkcode show}.
     *
     * ```typescript
     * this.markerArea1.show();
     * if (this.currentState) {
     *   this.markerArea1.restoreState(this.currentState);
     * }
     * ```
     *
     * @param state - previously saved state object.
     */
    restoreState(state: MarkerAreaState): void;
    private addNewMarker;
    /**
     * Initiate new marker creation.
     *
     * marker.js switches to marker creation mode for the marker type specified
     * and users can draw a new marker like they would by pressing a corresponding
     * toolbar button.
     *
     * This example initiates creation of a `FrameMarker`:
     * ```typescript
     * this.markerArea1.createNewMarker(FrameMarker);
     * ```
     *
     * @param markerType
     */
    createNewMarker(markerType: typeof MarkerBase | string): void;
    private markerCreated;
    private colorChanged;
    private fillColorChanged;
    private markerStateChanged;
    /**
     * Sets the currently selected marker or deselects it if no parameter passed.
     *
     * @param marker marker to select. Deselects current marker if undefined.
     */
    setCurrentMarker(marker?: MarkerBase): void;
    private onPointerDown;
    private onDblClick;
    private onPointerMove;
    private onPointerUp;
    private onPointerOut;
    private onKeyUp;
    private clientToLocalCoordinates;
    private onWindowResize;
    private positionUI;
    /**
     * Add license key.
     *
     * This is a proxy method for {@linkcode Activator.addKey()}.
     *
     * @param key - commercial license key.
     */
    addLicenseKey(key: string): void;
    private eventListeners;
    /**
     * Adds an event listener for one of the marker.js Live events.
     *
     * @param eventType - type of the event.
     * @param handler - function handling the event.
     *
     * @since 2.16.0
     */
    addEventListener<T extends keyof IEventListenerRepository>(eventType: T, handler: EventHandler<T>): void;
    /**
     * Removes an event listener for one of the marker.js Live events.
     *
     * @param eventType - type of the event.
     * @param handler - function currently handling the event.
     *
     * @since 2.16.0
     */
    removeEventListener<T extends keyof IEventListenerRepository>(eventType: T, handler: EventHandler<T>): void;
    private _silentRenderMode;
    /**
     * Renders previously saved state without user intervention.
     *
     * The rendered image is returned to the `render` event handlers (as in the regular interactive process).
     * Rendering options set on `MarkerArea` are respected.
     *
     * @param state state to render
     *
     * @since 2.17.0
     */
    renderState(state: MarkerAreaState): void;
    private _isFocused;
    /**
     * Returns true when this MarkerArea is focused.
     *
     * @since 2.19.0
     */
    get isFocused(): boolean;
    private _previousCurrentMarker?;
    /**
     * Focuses the MarkerArea to receive all input from the window.
     *
     * Is called automatically when user clicks inside of the marker area. Call manually to set focus explicitly.
     *
     * @since 2.19.0
     */
    focus(): void;
    /**
     * Tells MarkerArea to stop reacting to input outside of the immediate marker image.
     *
     * Call `focus()` to re-enable.
     *
     * @since 2.19.0
     */
    blur(): void;
}

/**
 * Manages commercial marker.js 2 licenses.
 */
declare class Activator {
    private static key;
    /**
     * Add a license key
     * @param key license key sent to you after purchase.
     */
    static addKey(key: string): void;
    /**
     * Returns true if the copy of marker.js is commercially licensed.
     */
    static get isLicensed(): boolean;
}

/**
 * Utility class to simplify SVG operations.
 */
declare class SvgHelper {
    /**
     * Creates SVG "defs".
     */
    static createDefs(): SVGDefsElement;
    /**
     * Sets attributes on an arbitrary SVG element
     * @param el - target SVG element.
     * @param attributes - set of name-value attribute pairs.
     */
    static setAttributes(el: SVGElement, attributes: Array<[string, string]>): void;
    /**
     * Creates an SVG rectangle with the specified width and height.
     * @param width
     * @param height
     * @param attributes - additional attributes.
     */
    static createRect(width: number | string, height: number | string, attributes?: Array<[string, string]>): SVGRectElement;
    /**
     * Creates an SVG line with specified end-point coordinates.
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param attributes - additional attributes.
     */
    static createLine(x1: number | string, y1: number | string, x2: number | string, y2: number | string, attributes?: Array<[string, string]>): SVGLineElement;
    /**
     * Creates an SVG polygon with specified points.
     * @param points - points as string.
     * @param attributes - additional attributes.
     */
    static createPolygon(points: string, attributes?: Array<[string, string]>): SVGPolygonElement;
    /**
     * Creates an SVG circle with the specified radius.
     * @param radius
     * @param attributes - additional attributes.
     */
    static createCircle(radius: number, attributes?: Array<[string, string]>): SVGCircleElement;
    /**
     * Creates an SVG ellipse with the specified horizontal and vertical radii.
     * @param rx
     * @param ry
     * @param attributes - additional attributes.
     */
    static createEllipse(rx: number, ry: number, attributes?: Array<[string, string]>): SVGEllipseElement;
    /**
     * Creates an SVG group.
     * @param attributes - additional attributes.
     */
    static createGroup(attributes?: Array<[string, string]>): SVGGElement;
    /**
     * Creates an SVG transform.
     */
    static createTransform(): SVGTransform;
    /**
     * Creates an SVG marker.
     * @param id
     * @param orient
     * @param markerWidth
     * @param markerHeight
     * @param refX
     * @param refY
     * @param markerElement
     */
    static createMarker(id: string, orient: string, markerWidth: number | string, markerHeight: number | string, refX: number | string, refY: number | string, markerElement: SVGGraphicsElement): SVGMarkerElement;
    /**
     * Creaes an SVG text element.
     * @param attributes - additional attributes.
     */
    static createText(attributes?: Array<[string, string]>): SVGTextElement;
    /**
     * Creates an SVG TSpan.
     * @param text - inner text.
     * @param attributes - additional attributes.
     */
    static createTSpan(text: string, attributes?: Array<[string, string]>): SVGTSpanElement;
    /**
     * Creates an SVG image element.
     * @param attributes - additional attributes.
     */
    static createImage(attributes?: Array<[string, string]>): SVGImageElement;
    /**
     * Creates an SVG point with the specified coordinates.
     * @param x
     * @param y
     */
    static createPoint(x: number, y: number): SVGPoint;
    /**
     * Creates an SVG path with the specified shape (d).
     * @param d - path shape
     * @param attributes - additional attributes.
     */
    static createPath(d: string, attributes?: Array<[string, string]>): SVGPathElement;
}

/**
 * Represents a simplified version of the SVGMatrix.
 */
interface ITransformMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}
/**
 * A utility class to transform between SVGMatrix and its simplified representation.
 */
declare class TransformMatrix {
    static toITransformMatrix(matrix: SVGMatrix): ITransformMatrix;
    static toSVGMatrix(currentMatrix: SVGMatrix, newMatrix: ITransformMatrix): SVGMatrix;
}

/**
 * Represents available arrow types.
 *
 * - `both` - arrow tips on both sides.
 * - `start` - arrow tip on the starting point of line.
 * - `end` - arrow tip on the ending point of line.
 * - `none` - no arrow tips.
 */
declare type ArrowType = 'both' | 'start' | 'end' | 'none';
/**
 * Handler for arrow type change event.
 */
declare type ArrowTypeChangeHandler = (newType: ArrowType) => void;
/**
 * Arrow type selection panel.
 */
declare class ArrowTypePanel extends ToolboxPanel {
    private currentType?;
    private typeBoxes;
    /**
     * Event handler for the arrow type change event.
     */
    onArrowTypeChanged?: ArrowTypeChangeHandler;
    /**
     * Creates an ArrowTypePanel.
     * @param title - panel title.
     * @param currentType - currently set arrow type.
     * @param icon - panel button icon (SVG image markup).
     */
    constructor(title: string, currentType?: ArrowType, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private setCurrentType;
}

/**
 * Handler type for the color change event.
 */
declare type ColorChangeHandler = (newColor: string) => void;
/**
 * Color picker panel.
 */
declare class ColorPickerPanel extends ToolboxPanel {
    colors: string[];
    private currentColor?;
    private addTransparent;
    private colorBoxes;
    /**
     * Color change event handler.
     */
    onColorChanged?: ColorChangeHandler;
    /**
     * Creates a color picker panel.
     * @param title - panel title.
     * @param colors - available colors.
     * @param currentColor - currently selected color.
     * @param icon - panel button icon (SVG imager markup).
     */
    constructor(title: string, colors: string[], currentColor?: string, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private getColorBox;
    private setCurrentColor;
}

/**
 * Font change event handler type.
 */
declare type FontChangeHandler = (newFont: string) => void;
/**
 * Font family selection toolbox panel.
 */
declare class FontFamilyPanel extends ToolboxPanel {
    private fonts;
    private currentFont?;
    private fontBoxes;
    /**
     * Handler for the font family change event.
     */
    onFontChanged?: FontChangeHandler;
    /**
     * Creates a font family toolbox panel.
     * @param title - panel title.
     * @param fonts - available font families.
     * @param currentFont - currently selected font family.
     * @param icon - panel button icon (SVG image markup).
     */
    constructor(title: string, fonts: string[], currentFont?: string, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private setCurrentFont;
}

/**
 * Line style change event handler type.
 */
declare type StyleChangeHandler = (newStyle: string) => void;
/**
 * Line style (solid, dashed, etc.) toolbox panel.
 */
declare class LineStylePanel extends ToolboxPanel {
    private styles;
    private currentStyle?;
    private styleBoxes;
    /**
     * Handler for the style change event.
     */
    onStyleChanged?: StyleChangeHandler;
    /**
     * Creates a line style toolbox panel.
     * @param title - panel title
     * @param styles - available line styles (dash array).
     * @param currentStyle - currently selected style.
     * @param icon - panel button icon (SVG image markup).
     */
    constructor(title: string, styles: string[], currentStyle?: string, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private setCurrentStyle;
}

/**
 * Line width change event handler type.
 */
declare type WidthChangeHandler = (newWidth: number) => void;
/**
 * Line width toolbox panel.
 */
declare class LineWidthPanel extends ToolboxPanel {
    private widths;
    private currentWidth?;
    private widthBoxes;
    /**
     * Line width change event handler.
     */
    onWidthChanged?: WidthChangeHandler;
    /**
     * Creates a line width toolbox panel.
     * @param title - panel title.
     * @param widths - available widths.
     * @param currentWidth - currently set width.
     * @param icon - toolbox panel icon (SVG image markup).
     */
    constructor(title: string, widths: number[], currentWidth?: number, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private setCurrentWidth;
}

/**
 * Opacity chage event handler type.
 */
declare type OpacityChangeHandler = (newOpacity: number) => void;
/**
 * Opacity panel.
 */
declare class OpacityPanel extends ToolboxPanel {
    private opacities;
    private currentOpacity?;
    private opacityBoxes;
    /**
     * Opacity change event handler.
     */
    onOpacityChanged?: OpacityChangeHandler;
    /**
     * Creates an opacity panel.
     * @param title - panel title.
     * @param opacities - available opacities.
     * @param currentOpacity - current opacity.
     * @param icon - toolbox panel button (SVG image markup).
     */
    constructor(title: string, opacities: number[], currentOpacity?: number, icon?: string);
    /**
     * Returns panel UI.
     */
    getUi(): HTMLDivElement;
    private setCurrentOpacity;
}

/**
 * Represents a single resize-manipulation grip used in marker's manipulation controls.
 */
declare class ResizeGrip {
    /**
     * Grip's visual element.
     */
    visual: SVGGraphicsElement;
    /**
     * Grip's size (raduis).
     */
    readonly GRIP_SIZE = 10;
    /**
     * Creates a new grip.
     */
    constructor();
    /**
     * Returns true if passed SVG element belongs to the grip. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
}

/**
 * Represents base state for line-style markers.
 */
interface LinearMarkerBaseState extends MarkerBaseState {
    /**
     * x coordinate for the first end-point.
     */
    x1: number;
    /**
     * y coordinate for the first end-point.
     */
    y1: number;
    /**
     * x coordinate for the second end-point.
     */
    x2: number;
    /**
     * y coordinate for the second end-point.
     */
    y2: number;
}

/**
 * LinearMarkerBase is a base class for all line-type markers (Line, Arrow, Measurement Tool, etc.).
 */
declare class LinearMarkerBase extends MarkerBase {
    /**
     * x coordinate of the first end-point
     */
    protected x1: number;
    /**
     * y coordinate of the first end-point
     */
    protected y1: number;
    /**
     * x coordinate of the second end-point
     */
    protected x2: number;
    /**
     * y coordinate of the second end-point
     */
    protected y2: number;
    /**
     * Default line length when marker is created with a simple click (without dragging).
     */
    protected defaultLength: number;
    /**
     * Pointer coordinates at the satart of move or resize.
     */
    protected manipulationStartX: number;
    protected manipulationStartY: number;
    private manipulationStartX1;
    private manipulationStartY1;
    private manipulationStartX2;
    private manipulationStartY2;
    /**
     * Marker's main visual.
     */
    protected visual: SVGGraphicsElement;
    /**
     * Container for control elements.
     */
    protected controlBox: SVGGElement;
    /**
     * First manipulation grip
     */
    protected grip1: ResizeGrip;
    /**
     * Second manipulation grip.
     */
    protected grip2: ResizeGrip;
    /**
     * Active manipulation grip.
     */
    protected activeGrip: ResizeGrip;
    /**
     * Creates a LineMarkerBase object.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerUp(point: IPoint): void;
    /**
     * When implemented adjusts marker visual after manipulation when needed.
     */
    protected adjustVisual(): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resizes the line marker.
     * @param point - current manipulation coordinates.
     */
    protected resize(point: IPoint): void;
    /**
     * Displays marker's controls.
     */
    select(): void;
    /**
     * Hides marker's controls.
     */
    deselect(): void;
    /**
     * Creates control box for manipulation controls.
     */
    protected setupControlBox(): void;
    private adjustControlBox;
    /**
     * Adds control grips to control box.
     */
    protected addControlGrips(): void;
    /**
     * Creates manipulation grip.
     * @returns - manipulation grip.
     */
    protected createGrip(): ResizeGrip;
    /**
     * Updates manipulation grip layout.
     */
    protected positionGrips(): void;
    /**
     * Positions manipulation grip.
     * @param grip - grip to position
     * @param x - new X coordinate
     * @param y - new Y coordinate
     */
    protected positionGrip(grip: SVGGraphicsElement, x: number, y: number): void;
    /**
     * Returns marker's state.
     */
    getState(): LinearMarkerBaseState;
    /**
     * Restores marker's state to the previously saved one.
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

/**
 * Represents a state snapshot of a RectangularBoxMarkerBase.
 */
interface RectangularBoxMarkerBaseState extends MarkerBaseState {
    /**
     * x coordinate of the top-left corner.
     */
    left: number;
    /**
     * y coordinate of the top-left corner.
     */
    top: number;
    /**
     * Marker's width.
     */
    width: number;
    /**
     * Marker's height.
     */
    height: number;
    /**
     * Marker's rotation angle.
     */
    rotationAngle: number;
    /**
     * Transformation matrix for the marker's visual.
     */
    visualTransformMatrix: ITransformMatrix;
    /**
     * Transofrmation matrix for the marker's container.
     */
    containerTransformMatrix: ITransformMatrix;
}

/**
 * RectangularBoxMarkerBase is a base class for all marker's with rectangular controls such as all rectangle markers,
 * text and callout markers.
 *
 * It creates and manages the rectangular control box and related resize, move, and rotate manipulations.
 */
declare class RectangularBoxMarkerBase extends MarkerBase {
    /**
     * x coordinate of the top-left corner.
     */
    protected left: number;
    /**
     * y coordinate of the top-left corner.
     */
    protected top: number;
    /**
     * Marker width.
     */
    protected width: number;
    /**
     * Marker height.
     */
    protected height: number;
    /**
     * The default marker size when the marker is created with a click (without dragging).
     */
    protected defaultSize: IPoint;
    /**
     * x coordinate of the top-left corner at the start of manipulation.
     */
    protected manipulationStartLeft: number;
    /**
     * y coordinate of the top-left corner at the start of manipulation.
     */
    protected manipulationStartTop: number;
    /**
     * Width at the start of manipulation.
     */
    protected manipulationStartWidth: number;
    /**
     * Height at the start of manipulation.
     */
    protected manipulationStartHeight: number;
    /**
     * x coordinate of the pointer at the start of manipulation.
     */
    protected manipulationStartX: number;
    /**
     * y coordinate of the pointer at the start of manipulation.
     */
    protected manipulationStartY: number;
    /**
     * Pointer's horizontal distance from the top left corner.
     */
    protected offsetX: number;
    /**
     * Pointer's vertical distance from the top left corner.
     */
    protected offsetY: number;
    /**
     * Marker's rotation angle.
     */
    protected rotationAngle: number;
    /**
     * x coordinate of the marker's center.
     */
    protected get centerX(): number;
    /**
     * y coordinate of the marker's center.
     */
    protected get centerY(): number;
    private _visual;
    /**
     * Container for the marker's visual.
     */
    protected get visual(): SVGGraphicsElement;
    protected set visual(value: SVGGraphicsElement);
    /**
     * Container for the marker's editing controls.
     */
    protected controlBox: SVGGElement;
    private readonly CB_DISTANCE;
    private controlRect;
    private rotatorGripLine;
    private controlGrips;
    private rotatorGrip;
    private activeGrip;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    protected _suppressMarkerCreateEvent: boolean;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerUp(point: IPoint): void;
    /**
     * Moves visual to the specified coordinates.
     * @param point - coordinates of the new top-left corner of the visual.
     */
    protected moveVisual(point: IPoint): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resizes the marker based on pointer coordinates and context.
     * @param point - pointer coordinates.
     */
    protected resize(point: IPoint): void;
    /**
     * Sets control box size and location.
     */
    protected setSize(): void;
    private rotate;
    private applyRotation;
    /**
     * Returns point coordinates based on the actual screen coordinates and marker's rotation.
     * @param point - original pointer coordinates
     */
    protected rotatePoint(point: IPoint): IPoint;
    /**
     * Returns original point coordinates based on coordinates with rotation applied.
     * @param point - rotated point coordinates.
     */
    protected unrotatePoint(point: IPoint): IPoint;
    /**
     * Displays marker's controls.
     */
    select(): void;
    /**
     * Hides marker's controls.
     */
    deselect(): void;
    private setupControlBox;
    private adjustControlBox;
    private addControlGrips;
    private createGrip;
    private positionGrips;
    private positionGrip;
    /**
     * Hides marker's editing controls.
     */
    protected hideControlBox(): void;
    /**
     * Shows marker's editing controls.
     */
    protected showControlBox(): void;
    /**
     * Returns marker's state.
     */
    getState(): RectangularBoxMarkerBaseState;
    /**
     * Restores marker's state to the previously saved one.
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

/**
 * Represents RectangleMarker's state.
 */
interface RectangleMarkerState extends RectangularBoxMarkerBaseState {
    /**
     * Rectangle fill color.
     */
    fillColor: string;
    /**
     * Rectangle border stroke (line) color.
     */
    strokeColor: string;
    /**
     * Rectange border width.
     */
    strokeWidth: number;
    /**
     * Rectange border dash array.
     */
    strokeDasharray: string;
    /**
     * Rectangle opacity (alpha). 0 to 1.
     */
    opacity: number;
}

/**
 * RecatngleMarker is a base class for all rectangular markers (Frame, Cover, Highlight, etc.)
 */
declare abstract class RectangleMarker extends RectangularBoxMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static title: string;
    /**
     * Recangle fill color.
     */
    protected fillColor: string;
    /**
     * Rectangle stroke color.
     */
    protected strokeColor: string;
    /**
     * Rectangle border stroke width.
     */
    protected strokeWidth: number;
    /**
     * Rectangle border stroke dash array.
     */
    protected strokeDasharray: string;
    /**
     * Rectangle opacity (alpha). 0 to 1.
     */
    protected opacity: number;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Creates the marker's rectangle visual.
     */
    protected createVisual(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resizes the marker based on the pointer coordinates.
     * @param point - current pointer coordinates.
     */
    protected resize(point: IPoint): void;
    /**
     * Sets visual's width and height attributes based on marker's width and height.
     */
    protected setSize(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerUp(point: IPoint): void;
    /**
     * Sets rectangle's border stroke color.
     * @param color - color as string
     */
    protected setStrokeColor(color: string): void;
    /**
     * Sets rectangle's fill color.
     * @param color - color as string
     */
    protected setFillColor(color: string): void;
    /**
     * Sets rectangle's border stroke (line) width.
     * @param color - color as string
     */
    protected setStrokeWidth(width: number): void;
    /**
     * Sets rectangle's border stroke dash array.
     * @param color - color as string
     */
    protected setStrokeDasharray(dashes: string): void;
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

/**
 * RectangularBoxMarkerGrips is a set of resize/rotation grips for a rectangular marker.
 */
declare class RectangularBoxMarkerGrips {
    /**
     * Top-left grip.
     */
    topLeft: ResizeGrip;
    /**
     * Top-center grip.
     */
    topCenter: ResizeGrip;
    /**
     * Top-right grip.
     */
    topRight: ResizeGrip;
    /**
     * Center-left grip.
     */
    centerLeft: ResizeGrip;
    /**
     * Center-right grip.
     */
    centerRight: ResizeGrip;
    /**
     * Bottom-left grip.
     */
    bottomLeft: ResizeGrip;
    /**
     * Bottom-center grip.
     */
    bottomCenter: ResizeGrip;
    /**
     * Bottom-right grip.
     */
    bottomRight: ResizeGrip;
    /**
     * Creates a new marker grip set.
     */
    constructor();
    /**
     * Returns a marker grip owning the specified visual.
     * @param gripVisual - visual for owner to be determined.
     */
    findGripByVisual(gripVisual: EventTarget): ResizeGrip | undefined;
}

/**
 * Represents state of a {@link LineMarker}.
 */
interface LineMarkerState extends LinearMarkerBaseState {
    /**
     * Line color.
     */
    strokeColor: string;
    /**
     * Line width.
     */
    strokeWidth: number;
    /**
     * Line dash array.
     */
    strokeDasharray: string;
}

declare class LineMarker extends LinearMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Invisible wider line to make selection easier/possible.
     */
    protected selectorLine: SVGLineElement;
    /**
     * Visible marker line.
     */
    protected visibleLine: SVGLineElement;
    /**
     * Line color.
     */
    protected strokeColor: string;
    /**
     * Line width.
     */
    protected strokeWidth: number;
    /**
     * Line dash array.
     */
    protected strokeDasharray: string;
    /**
     * Color pickar panel for line color.
     */
    protected strokePanel: ColorPickerPanel;
    /**
     * Line width toolbox panel.
     */
    protected strokeWidthPanel: LineWidthPanel;
    /**
     * Line dash array toolbox panel.
     */
    protected strokeStylePanel: LineStylePanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private createVisual;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Adjusts visual after manipulation.
     */
    protected adjustVisual(): void;
    /**
     * Sets line color.
     * @param color - new color.
     */
    protected setStrokeColor(color: string): void;
    /**
     * Sets line width.
     * @param width - new width.
     */
    protected setStrokeWidth(width: number): void;
    /**
     * Sets line dash array.
     * @param dashes - new dash array.
     */
    protected setStrokeDasharray(dashes: string): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): LineMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
}

/**
 * Represents arrow marker state.
 */
interface ArrowMarkerState extends LineMarkerState {
    /**
     * Type of arrow.
     */
    arrowType: ArrowType;
}

/**
 * Represents an arrow marker.
 */
declare class ArrowMarker extends LineMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    private arrow1;
    private arrow2;
    private arrowType;
    private arrowBaseHeight;
    private arrowBaseWidth;
    /**
     * Toolbox panel for arrow type selection.
     */
    protected arrowTypePanel: ArrowTypePanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private getArrowPoints;
    private createTips;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Adjusts marker visual after manipulation.
     */
    protected adjustVisual(): void;
    private setArrowType;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): ArrowMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
}

interface TextMarkerState extends RectangularBoxMarkerBaseState {
    color: string;
    fontFamily: string;
    padding: number;
    text: string;
}

declare class TextMarker extends RectangularBoxMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Text color.
     */
    protected color: string;
    /**
     * Text's font family.
     */
    protected fontFamily: string;
    /**
     * Padding inside of the marker's bounding box in percents.
     */
    protected padding: number;
    /**
     * Text color picker toolbox panel.
     */
    protected colorPanel: ColorPickerPanel;
    /**
     * Text font family toolbox panel.
     */
    protected fontFamilyPanel: FontFamilyPanel;
    private readonly DEFAULT_TEXT;
    private text;
    /**
     * Visual text element.
     */
    protected textElement: SVGTextElement;
    /**
     * Text background rectangle.
     */
    protected bgRectangle: SVGRectElement;
    /**
     * Div element for the text editor container.
     */
    protected textEditDiv: HTMLDivElement;
    /**
     * Editable text element.
     */
    protected textEditor: HTMLDivElement;
    protected isMoved: boolean;
    private pointerDownPoint;
    private pointerDownTimestamp;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Creates text marker visual.
     */
    protected createVisual(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    private renderText;
    private getTextScale;
    private getTextPosition;
    private sizeText;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resize marker based on current pointer coordinates and context.
     * @param point
     */
    protected resize(point: IPoint): void;
    /**
     * Sets size of marker elements after manipulation.
     */
    protected setSize(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     */
    pointerUp(point: IPoint): void;
    private showTextEditor;
    private positionTextEditor;
    private textEditDivClicked;
    select(): void;
    /**
     * Deselects this marker, renders text (if necessary), and hides selected marker UI.
     */
    deselect(): void;
    /**
     * Opens text editor on double-click.
     * @param point
     * @param target
     */
    dblClick(point: IPoint, target?: EventTarget): void;
    /**
     * Sets text color.
     * @param color - new text color.
     */
    protected setColor(color: string): void;
    /**
     * Sets font family.
     * @param font - new font family.
     */
    protected setFont(font: string): void;
    /**
     * Hides marker visual.
     */
    protected hideVisual(): void;
    /**
     * Shows marker visual.
     */
    protected showVisual(): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): TextMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

/**
 * Represents the state of a CalloutMarker.
 */
interface CalloutMarkerState extends TextMarkerState {
    /**
     * Background (fill) color.
     */
    bgColor: string;
    /**
     * Position of the callout tip.
     */
    tipPosition: IPoint;
}

declare class CalloutMarker extends TextMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    private bgColor;
    /**
     * Color picker toolbox panel for the background (fill) color.
     */
    protected bgColorPanel: ColorPickerPanel;
    private tipPosition;
    private tipBase1Position;
    private tipBase2Position;
    private tip;
    private tipGrip;
    private tipMoving;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private createTip;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     */
    pointerUp(point: IPoint): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Sets marker's background/fill color.
     * @param color - new background color.
     */
    protected setBgColor(color: string): void;
    private getTipPoints;
    private setTipPoints;
    /**
     * Resize marker based on current pointer coordinates and context.
     * @param point
     */
    protected resize(point: IPoint): void;
    private positionTip;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Selects this marker and displays appropriate selected marker UI.
     */
    select(): void;
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): CalloutMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

declare class CoverMarker extends RectangleMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Color picker panel for the background color.
     */
    protected fillPanel: ColorPickerPanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
}

/**
 * Represents state of a {@link CurveMarker}.
 */
interface CurveMarkerState extends LinearMarkerBaseState {
    /**
     * Line color.
     */
    strokeColor: string;
    /**
     * Line width.
     */
    strokeWidth: number;
    /**
     * Line dash array.
     */
    strokeDasharray: string;
    curveX: number;
    curveY: number;
}

declare class CurveMarker extends LinearMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Invisible wider curve to make selection easier/possible.
     */
    protected selectorCurve: SVGPathElement;
    /**
     * Visible marker curve.
     */
    protected visibleCurve: SVGPathElement;
    /**
     * Line color.
     */
    protected strokeColor: string;
    /**
     * Line width.
     */
    protected strokeWidth: number;
    /**
     * Line dash array.
     */
    protected strokeDasharray: string;
    /**
     * Color picker panel for line color.
     */
    protected strokePanel: ColorPickerPanel;
    /**
     * Line width toolbox panel.
     */
    protected strokeWidthPanel: LineWidthPanel;
    /**
     * Line dash array toolbox panel.
     */
    protected strokeStylePanel: LineStylePanel;
    private curveGrip;
    private curveX;
    private curveY;
    private manipulationStartCurveX;
    private manipulationStartCurveY;
    private curveControlLine1;
    private curveControlLine2;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private getPathD;
    private createVisual;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Adjusts visual after manipulation.
     */
    protected adjustVisual(): void;
    /**
     * Sets manipulation grips up.
     */
    protected setupControlBox(): void;
    /**
     * Add manipulation grips to the control box.
     */
    protected addControlGrips(): void;
    /**
     * Positions manipulation grips.
     */
    protected positionGrips(): void;
    /**
     * Moves or resizes the marker.
     * @param point event coordinates
     */
    manipulate(point: IPoint): void;
    /**
     * Resizes the marker.
     * @param point event coordinates.
     */
    protected resize(point: IPoint): void;
    /**
     * Sets line color.
     * @param color - new color.
     */
    protected setStrokeColor(color: string): void;
    /**
     * Sets line width.
     * @param width - new width.
     */
    protected setStrokeWidth(width: number): void;
    /**
     * Sets line dash array.
     * @param dashes - new dash array.
     */
    protected setStrokeDasharray(dashes: string): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): CurveMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
}

declare class EllipseMarker extends RectangularBoxMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Ellipse fill color.
     */
    protected fillColor: string;
    /**
     * Ellipse border color.
     */
    protected strokeColor: string;
    /**
     * Ellipse border line width.
     */
    protected strokeWidth: number;
    /**
     * Ellipse border dash array.
     */
    protected strokeDasharray: string;
    /**
     * Ellipse opacity (0..1).
     */
    protected opacity: number;
    protected strokePanel: ColorPickerPanel;
    protected fillPanel: ColorPickerPanel;
    protected strokeWidthPanel: LineWidthPanel;
    protected strokeStylePanel: LineStylePanel;
    protected opacityPanel: OpacityPanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    /**
     * Creates marker visual.
     */
    protected createVisual(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resize marker based on current pointer coordinates and context.
     * @param point
     */
    protected resize(point: IPoint): void;
    /**
     * Sets marker's visual size after manipulation.
     */
    protected setSize(): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     */
    pointerUp(point: IPoint): void;
    /**
     * Sets marker's line color.
     * @param color - new line color.
     */
    protected setStrokeColor(color: string): void;
    /**
     * Sets marker's fill (background) color.
     * @param color - new fill color.
     */
    protected setFillColor(color: string): void;
    /**
     * Sets marker's line width.
     * @param width - new line width
     */
    protected setStrokeWidth(width: number): void;
    /**
     * Sets marker's border dash array.
     * @param dashes - new dash array.
     */
    protected setStrokeDasharray(dashes: string): void;
    /**
     * Sets marker's opacity.
     * @param opacity - new opacity value (0..1).
     */
    protected setOpacity(opacity: number): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

declare class EllipseFrameMarker extends EllipseMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
}

declare class FrameMarker extends RectangleMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    private strokePanel;
    private strokeWidthPanel;
    private strokeStylePanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
}

/**
 * Represents state of the {@link FreehandMarker}.
 */
interface FreehandMarkerState extends RectangularBoxMarkerBaseState {
    /**
     * URL of the drawing image.
     */
    drawingImgUrl: string;
}

declare class FreehandMarker extends RectangularBoxMarkerBase {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    /**
     * Marker color.
     */
    protected color: string;
    /**
     * Marker's stroke width.
     */
    protected lineWidth: number;
    private colorPanel;
    private lineWidthPanel;
    private canvasElement;
    private canvasContext;
    private drawingImage;
    private drawingImgUrl;
    private drawing;
    private pixelRatio;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private createVisual;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Handles marker manipulation (move, resize, rotate, etc.).
     *
     * @param point - event coordinates.
     */
    manipulate(point: IPoint): void;
    /**
     * Resize marker based on current pointer coordinates and context.
     * @param point
     */
    protected resize(point: IPoint): void;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) up event.
     *
     * @param point - event coordinates.
     */
    pointerUp(point: IPoint): void;
    private addCanvas;
    /**
     * Selects this marker and displays appropriate selected marker UI.
     */
    select(): void;
    /**
     * Deselects this marker and hides selected marker UI.
     */
    deselect(): void;
    private finishCreation;
    private setDrawingImage;
    /**
     * Sets marker drawing color.
     * @param color - new color.
     */
    protected setColor(color: string): void;
    /**
     * Sets line width.
     * @param width - new line width
     */
    protected setLineWidth(width: number): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): FreehandMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
    /**
     * Scales marker. Used after the image resize.
     *
     * @param scaleX - horizontal scale
     * @param scaleY - vertical scale
     */
    scale(scaleX: number, scaleY: number): void;
}

declare class HighlightMarker extends CoverMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    protected opacityPanel: OpacityPanel;
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Sets marker's opacity (0..1).
     * @param opacity - new opacity value.
     */
    protected setOpacity(opacity: number): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): RectangleMarkerState;
}

declare class MeasurementMarker extends LineMarker {
    /**
     * String type name of the marker type.
     *
     * Used when adding {@link MarkerArea.availableMarkerTypes} via a string and to save and restore state.
     */
    static typeName: string;
    /**
     * Marker type title (display name) used for accessibility and other attributes.
     */
    static title: string;
    /**
     * SVG icon markup displayed on toolbar buttons.
     */
    static icon: string;
    private tip1;
    private tip2;
    private get tipLength();
    /**
     * Creates a new marker.
     *
     * @param container - SVG container to hold marker's visual.
     * @param overlayContainer - overlay HTML container to hold additional overlay elements while editing.
     * @param settings - settings object containing default markers settings.
     */
    constructor(container: SVGGElement, overlayContainer: HTMLDivElement, settings: Settings);
    /**
     * Returns true if passed SVG element belongs to the marker. False otherwise.
     *
     * @param el - target element.
     */
    ownsTarget(el: EventTarget): boolean;
    private createTips;
    /**
     * Handles pointer (mouse, touch, stylus, etc.) down event.
     *
     * @param point - event coordinates.
     * @param target - direct event target element.
     */
    pointerDown(point: IPoint, target?: EventTarget): void;
    /**
     * Adjusts marker visual after manipulation.
     */
    protected adjustVisual(): void;
    /**
     * Returns the list of toolbox panels for this marker type.
     */
    get toolboxPanels(): ToolboxPanel[];
    /**
     * Returns current marker state that can be restored in the future.
     */
    getState(): LineMarkerState;
    /**
     * Restores previously saved marker state.
     *
     * @param state - previously saved state.
     */
    restoreState(state: MarkerBaseState): void;
}

export { Activator, ArrowMarker, ArrowMarkerState, ArrowType, ArrowTypeChangeHandler, ArrowTypePanel, CalloutMarker, CalloutMarkerState, ColorChangeHandler, ColorPickerPanel, ColorSet, CoverMarker, CurveMarker, CurveMarkerState, DisplayMode, EllipseFrameMarker, EllipseMarker, EventHandler, EventListenerRepository, FontChangeHandler, FontFamilyPanel, FrameMarker, FreehandMarker, FreehandMarkerState, HighlightMarker, IEventListenerRepository, IPoint, IStyleSettings, ITransformMatrix, LineMarker, LineMarkerState, LineStylePanel, LineWidthPanel, LinearMarkerBase, LinearMarkerBaseState, MarkerArea, MarkerAreaEvent, MarkerAreaEventHandler, MarkerAreaRenderEvent, MarkerAreaRenderEventHandler, MarkerAreaState, MarkerBase, MarkerBaseState, MarkerEvent, MarkerEventHandler, MeasurementMarker, OpacityChangeHandler, OpacityPanel, RectangleMarker, RectangleMarkerState, RectangularBoxMarkerBase, RectangularBoxMarkerBaseState, RectangularBoxMarkerGrips, ResizeGrip, Settings, Style, StyleChangeHandler, StyleClass, StyleManager, SvgHelper, TextMarker, TextMarkerState, ToolboxPanel, TransformMatrix, WidthChangeHandler };
