export type AppGlobalContextTypes = {
    upLoaders: any[],
    notifications: any[],
    showNotification: (notificationData: { type:string, message:string }) => void,
    showOverlayCloak: () => void,
    removeNotification: () => void,
    handleOverlayClose: () => void,
    setHandleOverlayClose: (callback: () => void) => void,
    handleShowOverlayCloak: (isVisible: boolean) => void,
    addUploaderToGlobalContext: () => void,
    removeUploaderFromGlobalContext: () => void,
};
