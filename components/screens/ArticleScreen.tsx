import React, { useEffect } from 'react';

type ArticleScreenProps = any

function useSetTitleEffect({ route, navigation }: ArticleScreenProps) {
  useEffect(
    function setTitle() {
      navigation.setOptions({ title: route.params.title });
    },
    [route.params.title, navigation]
  );
}

export default function ArticleScreen(props: ArticleScreenProps) {
  useSetTitleEffect(props);
  return null;
}