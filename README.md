# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<br>

# What I Have Learned

1. How to make radio buttons and a custom input button.

- Make a bunch of radio input with the same name.
- Make each radio button hold a span el.

```
    <input
        name="tip"
        type='radio'
        value="0.05"
        onChange={e => handleTipChange(e)}
    />
```

2. Custom style a radio button 
```
    [type="radio"] {
      display: none;

    }

    .tip-btn{
        ...own style
    }


```

3. Custom style a text input placeholder
```
    .bill-input {
      width: 100%;
      border: 2px solid transparent;
      border-radius: $input-border-radius;
      background-color: $very-light-grayish-cyan;
      ...
    }
```
