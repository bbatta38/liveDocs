"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import React from "react";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <Header>
                    <div className="flex w-fit items-center justify-center gap-2">
                        <p className="document-title">
                            This is fake document title
                        </p>
                    </div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </Header>
                <Editor />
            </ClientSideSuspense>
        </RoomProvider>
    );
};

export default CollaborativeRoom;
