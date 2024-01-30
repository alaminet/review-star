# Review Star on React

With the help of this package, you can complete the review process very easily and save the value of those reviews on [React.js](https://react.dev/)

## Installation

Install review-star with npm

```bash
  npm i review-star
```

## Usage/Examples

```javascript
import { useState } from "react";
import ReviewStar from "review-star";

function App() {
  const [reVal, SetReVal] = useState(0);
  return <ReviewStar reviewClick={reVal} reviewCount={SetReVal} />;
}
```

## API Reference

#### Import Package

```javascript
import ReviewStar from "review-star";
```

#### Make useState

you should make a useState for update and collect review data

```javascript
const [reVal, SetReVal] = useState(0);
```

#### Add Component (Updateable)

for updatable review-star need useState

```javascript
<ReviewStar reviewClick={reVal} reviewCount={SetReVal} />
```

#### Add Component (Fixed)

to use fixed review-star

```javascript
<ReviewStar reviewClick={4} />
```

| Parameter     | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| `reviewClick` | `number` | **Required**. this for review click value |
| `reviewCount` | `number` | **Required**. this for review count value |

#### Get review value

```javascript
console.log(reVal);
```

## 🚀 About Me

I'm a MERN stack developer...
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/alaminet/)
