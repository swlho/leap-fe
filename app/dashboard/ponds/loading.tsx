import { CardSkeleton } from "@/app/ui/skeletons"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        </>
    )
  }